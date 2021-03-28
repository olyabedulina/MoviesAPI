import { loadMovies as loadMoviesService, addMovie as addMovieService } from '../../services'

export function loadMovies() {
    return (dispatch) => {
        dispatch({
            type: 'MOVIES__LOAD__INIT'
        })

        loadMoviesService().then((moviesData) => {
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

export function addMoviePostToServer(movieInfo) {
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__ADD__INIT'
        })

        addMovieService(movieInfo).then((moviesData) => {
            dispatch({
                type: 'MOVIE__ADD__DONE',
                payload: moviesData
            })
        })
    }
}

export function addMovie(movieInfo) {
    // return {
    //     type: 'MOVIE__ADD',
    //     payload: movieInfo
    // }
    return (dispatch) => {
        dispatch({
            type: 'MOVIE__ADD'
        })
        dispatch(addMoviePostToServer(movieInfo))
    }
}

export function deleteMovie(movieId) {
    return {
        type: 'MOVIE__DELETE',
        payload: movieId
    }
}

export function editMovie(movieInfo) {
    return {
        type: 'MOVIE__EDIT',
        payload: movieInfo
    }
}

export function sortMoviesBy(criterion) {
    return {
        type: 'MOVIES__SORT',
        payload: criterion
    }
}

export function filterMoviesBy(movieFilterID) {
    return {
        type: 'MOVIES__FILTER',
        payload: movieFilterID
    }
}
