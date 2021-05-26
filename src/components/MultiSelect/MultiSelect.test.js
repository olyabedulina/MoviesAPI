import React from 'react';
import renderer from 'react-test-renderer';

import MultiSelect from './MultiSelect';

describe('Components :: Multiselect snapshots:', () => {
    it('Test :: "Multiselect component', () => {
        const array1 = [
            {
                id: '1',
                name: 'foo',
                isSelected: true,
                isIncludedInFilter: true
            },
            {
                id: '2',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            },
            {
                id: '3',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            }];

        const array2 = ['1']

        const actual = renderer
            .create(<MultiSelect
                placeholder="Select genre"
                items={array1}
                selectedItems={array2}
                onChange={() => {}}
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Multiselect component', () => {
        const array1 = [
            {
                id: '1',
                name: 'foo',
                isSelected: true,
                isIncludedInFilter: true
            },
            {
                id: '2',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            },
            {
                id: '3',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            }];

        const array2 = ['1']

        const actual = renderer
            .create(<MultiSelect
                items={array1}
                selectedItems={array2}
                onChange={() => {}}
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Multiselect component', () => {
        const array1 = [
            {
                id: '1',
                name: 'foo',
                isSelected: true,
                isIncludedInFilter: true
            },
            {
                id: '2',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            },
            {
                id: '3',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            }];

        const array2 = ['1', '2']

        const actual = renderer
            .create(<MultiSelect
                items={array1}
                selectedItems={array2}
                onChange={() => { alert(1)}}
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });

    it('Test :: "Multiselect component', () => {
        const array1 = [
            {
                id: '1',
                name: 'foo',
                isSelected: true,
                isIncludedInFilter: true
            },
            {
                id: '2',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            },
            {
                id: '3',
                name: 'foo',
                isSelected: false,
                isIncludedInFilter: true
            }];

        const array2 = []

        const actual = renderer
            .create(<MultiSelect
                placeholder="foo"
                items={array1}
                selectedItems={array2}
            />)
            .toJSON();
        expect(actual).toMatchSnapshot();
    });
});
