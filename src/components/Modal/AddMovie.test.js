import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

import AddMovie from "./AddMovie";

describe('Components :: Add Movie unit tests:', () => {

    beforeEach(() => {
        let store = mockStore({ movieList: [ { A: 'A'}, { B: 'B'}], c: 'C' });

        render(
            <Provider store={store}>
                <AddMovie>
                    form
                </AddMovie>
            </Provider>
        );
    });

    test('type', () => {
        userEvent.type(screen.getByRole('textbox', {name: /title/i}), 'Hello, World!')
        expect(screen.getByRole('textbox', {name: /title/i})).toHaveValue('Hello, World!')
    })

    test('Clear title input', () => {
        userEvent.clear(screen.getByRole('textbox', {name: /title/i}))
        expect(screen.getByRole('textbox', {name: /title/i})).toHaveAttribute('value', '')
    })

    test('Type value into Runtime', () => {
        const input = screen.getByPlaceholderText(/Runtime here/i)
        userEvent.type(input, '120')
        expect(input.value).toBe('120')
    });

    test('Type value into Overview', () => {
        const input = screen.getByPlaceholderText(/Overview here/i)
        userEvent.type(input, 'Lorem ipsum dolor sit amet')
        expect(input.value).toBe('Lorem ipsum dolor sit amet')
    });

    it('Find title input by placeholder', () => {
        expect(screen.getByPlaceholderText('Title here')).toBeInTheDocument();
    });

    it('Find title input by placeholder and check to be empty', () => {
        expect(screen.getByPlaceholderText('Title here')).toBeEmptyDOMElement();
    });

    it('Find date input by placeholder', () => {
        expect(screen.getByPlaceholderText('Select Date')).toBeInTheDocument();
    });

    it('Find formButtons by test id', () => {
        expect(screen.getByTestId('formButtons')).toBeInTheDocument();
    });

    it('Find Select genre by text', () => {
        expect(screen.getByText(/Select genre/i)).toBeInTheDocument();
    });

    it('Find "Add movie" text', () => {
        expect(screen.getByText(/Add movie/i)).toBeInTheDocument();
    });

    it('Find Runtime by label text', () => {
        expect(screen.getByLabelText('Runtime')).toBeVisible();
    });

    it('Snapshot Test :: "AddMovie" component', () => {
        let store = mockStore({ movieList: [ { A: 'A'}, { B: 'B'}] });

        const actual = renderer
            .create(<Provider store={store}>
                <AddMovie />
            </Provider>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

});
