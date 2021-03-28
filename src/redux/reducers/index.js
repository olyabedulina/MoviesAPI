import { searchResultItemsData } from '../../components/data/searchResultItemsData'
import { filterItemsData } from '../../components/data/filterItemsData'

const x = {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
        "Drama",
        "Romance"
    ],
    "runtime": 106
}

function loadMovies() {
    return searchResultItemsData
}

function loadFilterItems() {
    return filterItemsData
}

function sortByDate(movieA, movieB) {
    if (movieA.releaseDate < movieB.releaseDate) {
        return 1;
    }
    if (movieA.releaseDate > movieB.releaseDate) {
        return -1;
    }
    return 0;
}

function sortByTitle(movieA, movieB) {
    if (movieA.title < movieB.title) {
        return -1;
    }
    if (movieA.title > movieB.title) {
        return 1;
    }
    return 0;
}

const sortNameToFuncMap = {
    date: sortByDate,
    title: sortByTitle
}

const initialState = {
    movieList: [],
    filterItemsList: [],
    sortBy: 'date'
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVIES__LOAD__DONE':
            return {
                ...state,
                movieList: action.payload,
                filterItemsList: loadFilterItems()
            }
        case 'MOVIE__ADD__DONE':
            return {
                ...state,
                // movieList: state.movieList.concat(action.payload)
                movieList: action.payload
            }
        case 'MOVIE__DELETE':
            return {
                ...state,
                movieList: state.movieList.filter((item) => (item.id !== action.payload))
            }
        case 'MOVIE__EDIT':
            return {
                ...state,
                movieList: state.movieList.map(function(item) {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item;
                })
            }
        case 'MOVIES__SORT':
            return {
                ...state,
                movieList: state.movieList.sort(sortNameToFuncMap[action.payload]),
                sortBy: action.payload
            }
        case 'MOVIES__FILTER':
            return {
                ...state,
                movieList: state.movieList.filter((item) => {
                    switch (action.payload) {
                        case '0':
                            return true
                        default:
                            return item.genre.some(({ id }) => (id === action.payload))
                    }
                })
            }
        default:
            return state
    }
}

export default rootReducer
