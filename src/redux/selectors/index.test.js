import {
    getSearchResultItems,
    getFilterItems,
    getCurrentMovie,
    getSortBy,
    getSortOrder,
    getFilters,
    getSelectedItem,
    getSearchQuery
} from './index'

describe('Redux :: Selectors tests:', () => {
    it('Test :: selector getSearchResultItems', () => {
        const movieList = [
            {
                movieA: 'movieA'
            },
            {
                movieB: 'movieB'
            }
        ];

        const state = {
            movieList: [
                {
                    movieA: 'movieA'
                },
                {
                    movieB: 'movieB'
                }
            ]
        }

        expect(getSearchResultItems(state)).toEqual(movieList)
    })

    it('Test :: selector getFilterItems', () => {
        const filterItemsList = [
            {
                id: '1',
                name: 'All',
            },
            {
                id: '2',
                name: 'Adventure',
            }
        ];

        const state = {
            filterItemsList: [
                {
                    id: '1',
                    name: 'All',
                },
                {
                    id: '2',
                    name: 'Adventure',
                }
            ]
        }

        expect(getFilterItems(state)).toEqual(filterItemsList)
    })

    it('Test :: selector getCurrentMovie', () => {
        const currentMovie = {
            movieA: 'movieA'
        }

        const state = {
            currentMovie: {
                    movieA: 'movieA'
                }
        }

        expect(getCurrentMovie(state)).toEqual(currentMovie)
    })

    it('Test :: selector getSortBy', () => {
        const sortBy = 'name'

        const state = {
            sortBy: 'name'
        }

        expect(getSortBy(state)).toEqual(sortBy)
    })

    it('Test :: selector getSortOrder', () => {
        const sortOrder = 'asc'

        const state = {
            sortOrder: 'asc'
        }

        expect(getSortOrder(state)).toEqual(sortOrder)
    })

    it('Test :: selector getFilters', () => {
        const filters = [
            {
                filterA: 'filterA'
            },
            {
                filterB: 'filterB'
            }
        ];

        const state = {
            filters: [
                {
                    filterA: 'filterA'
                },
                {
                    filterB: 'filterB'
                }
            ]
        }

        expect(getFilters(state)).toEqual(filters)
    })

    it('Test :: selector getSelectedItem', () => {
        const movieFilterID = 123;

        const state = {
            movieFilterID: 123
        }

        expect(getSelectedItem(state)).toEqual(movieFilterID)
    })

    it('Test :: selector getSearchQuery', () => {
        const search = 'foo';

        const state = {
            search: 'foo'
        }

        expect(getSearchQuery(state)).toEqual(search)
    })

});
