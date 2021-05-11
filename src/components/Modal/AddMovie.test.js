import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

import AddMovie from "./AddMovie";
import Button from "../Button";
import Input from "../Input";

describe('Components :: Add Movie unit tests:', () => {

    beforeEach(() => {
        let store = mockStore({ movieList: [ { A: 'A'}, { B: 'B'}] });

        render(
            <Provider store={store}>
                <AddMovie />
            </Provider>
        );
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

    it('Snapshot Test :: "AddMovie" component', () => {
        let store = mockStore({ movieList: [ { B: 'B'}, { C: 'C'}] });

        const actual = renderer
            .create(<Provider store={store}>
                <AddMovie>foo</AddMovie>
            </Provider>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Snapshot Test :: "AddMovie" component', () => {
        let store = mockStore({ movieList: [ { B: 'B'}, { C: 'C'}] });

        const actual = renderer
            .create(<Provider store={store}>
                <AddMovie>
                    <Button kind="aux" className="buttonAddMovie">+ Add Movie</Button>
                </AddMovie>
            </Provider>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Snapshot Test :: "AddMovie" component', () => {
        let store = mockStore({ movieList: [ { B: 'B'}, { C: 'C'}], movieId: '1'});

        const actual = renderer
            .create(<Provider store={store}>
                <AddMovie>
                    <input type="text" className="Type text" />
                    <Button kind="aux" className="buttonAddMovie">Submit data</Button>
                </AddMovie>
            </Provider>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Snapshot Test :: "AddMovie" component', () => {
        let store = mockStore({ movieList: [ { B: 'B'}, { C: 'C'}], movieId: '1'});

        const actual = renderer
            .create(<Provider store={store}>
                <AddMovie>
                    <form className="form">
                        <Input
                            className="formInput"
                            placeholder="What do you want to watch?"
                            type="text"
                            value="0"
                            onChange={() => {}}
                        />
                    </form>
                </AddMovie>
            </Provider>)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

});
