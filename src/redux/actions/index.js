import {
    loadMovies as loadMoviesService,
    addMovie as addMovieService,
    deleteMovie as deleteMovieService
} from '../../services'

export function loadMovies() {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__LOAD__INIT'
        })

        loadMoviesService({sortBy: 'date', sortOrder: 'asc', filters: ''}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__LOAD__DONE',
                payload: moviesData
            })
        })
    }
}

export function initApp() {
    return (dispatch) => {
        dispatch({
            type: 'APP__INIT'
        })
        dispatch(loadMovies())
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

export function editMovie(movieInfo) {
    return {
        type: 'MOVIE__EDIT',
        payload: movieInfo
    }
}

export function sortMoviesBy(sortBy) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: 'asc'}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__DONE',
                payload: moviesData
            })
        })
    }
}

export function filterMoviesBy(filters) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__FILTER__INIT'
        })

        loadMoviesService({filters: filters}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__FILTER__DONE',
                payload: moviesData
            })
        })
    }
}

// TODO: implement sort and filter Movies simultaneously
export function sortAndFilterMoviesBy({ sortBy, filters }) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__SORT__AND__FILTER__INIT'
        })

        loadMoviesService({sortBy: sortBy, sortOrder: 'asc', filters: filters}).then((moviesData) => {
            dispatch({
                type: 'MOVIES__SORT__AND__FILTER__DONE',
                payload: moviesData
            })
        })
    }
}
