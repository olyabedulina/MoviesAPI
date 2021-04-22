import {
    loadMovies as loadMoviesService,
    addMovie as addMovieService,
    editMovie as editMovieService,
    getMovie as getMovieService,
    deleteMovie as deleteMovieService
} from '../../services'

export function loadMovies(search) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__LOAD__INIT'
        })

        return loadMoviesService({
            sortBy: 'release_date',
            sortOrder: 'desc',
            filters: '',
            search: search,
            searchBy: 'title'
        }).then((moviesData) => {
            dispatch({
                type: 'MOVIES__LOAD__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        search: search
                    }
            })
        })
    }
}

export function initApp(searchQuery) {
    return (dispatch) => {
        dispatch({
            type: 'APP__INIT'
        })
        dispatch(loadMovies(searchQuery))
    }
}

export function addMovie(movieInfo) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__ADD'
        })

        dispatch({
            type: 'MOVIE__ADD__INIT'
        })

        addMovieService(movieInfo).then((moviesData) => {
            // console.log(123, moviesData)
            dispatch({
                type: 'MOVIE__ADD__DONE',
                payload: moviesData
            })
        })
    }
}

export function editMovie(movieInfo) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__EDIT__INIT'
        })

        editMovieService(movieInfo).then((moviesData) => {
            // console.log(123, moviesData)
            dispatch({
                type: 'MOVIE__EDIT__DONE',
                payload: moviesData
            })
        })
    }
}

export function deleteMovie(movieId) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__DELETE__INIT'
        })

        deleteMovieService(movieId).then(() => {
            dispatch({
                type: 'MOVIE__DELETE__DONE',
                payload: movieId
            })
        })
    }
}

export function getMovie(movieId) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__GET__INIT'
        })

        console.log("movieId = ", movieId)

        getMovieService(movieId).then((movieData) => {
            console.log("movieData = ", movieData)
            dispatch({
                type: 'MOVIE__GET__DONE',
                payload: movieData
            })
        })
    }
}

export function sortMoviesBy(sortBy, sortOrder) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: sortOrder}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        sortBy: sortBy,
                        sortOrder: sortOrder
                    }
            })
        })
    }
}

export function filterMoviesBy(filters, movieFilterID) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__FILTER__INIT'
        })

        loadMoviesService({filters: filters}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__FILTER__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        movieFilterID: movieFilterID,
                        filters: filters
                    }
            })
        })
    }
}

export function sortAndFilterMoviesBy(sortBy, sortOrder, filters, movieFilterID, searchQuery) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__AND__FILTER__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: sortOrder, filters: filters, search: searchQuery, searchBy: 'title'}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__AND__FILTER__DONE',
                payload:
                    {
                        moviesData: moviesData,
                        sortBy: sortBy,
                        sortOrder: sortOrder,
                        movieFilterID: movieFilterID,
                        filters: filters
                    }
            })
        })
    }
}

export function resetApp() {
    return {
        type: 'RESET__APP'
    }
}
