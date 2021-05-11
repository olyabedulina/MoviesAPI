import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export function loadMovies({
    filters = '',
    sortBy = '',
    sortOrder = '',
    search = '',
    searchBy = 'title',
    __loadMovies = null
}) {

    if (__loadMovies) {
        return __loadMovies()
    }
    else {
        return axios.get(`${baseUrl}/movies`, {
            params: {
                filter: filters,
                sortBy: sortBy,
                sortOrder: sortOrder,
                search: search,
                searchBy: searchBy
            }
        }).then(response => {
            return response.data.data
        })
    }
}

export function addMovie({ movieInfo,  __addMovie = null}) {
    const headers = {
        'Content-Type': 'application/json'
    }

    if (__addMovie) {
        return __addMovie()
    }
    else {
        return axios.post(`${baseUrl}/movies`, movieInfo, { headers })
            .then(response => response.data)
    }
}

export function editMovie({ movieInfo,  __editMovie = null}) {
    const headers = {
        'Content-Type': 'application/json'
    }

    if (__editMovie) {
        return __editMovie()
    }
    else {
        return axios.put(`${baseUrl}/movies`, movieInfo, { headers })
            .then(response => response.data)
    }
}

export function deleteMovie({ movieId, __deleteMovie = null }) {
    if (__deleteMovie) {
        return __deleteMovie()
    }
    else {
        return axios.delete(`${baseUrl}/movies/${movieId}`)
            .then(response => response.data)
    }
}

export function getMovie({ movieId, __getMovie = null }) {
    if (__getMovie) {
        return __getMovie()
    }
    else {
        return axios.get(`${baseUrl}/movies/${movieId}`)
            .then(response => response.data)
    }
}
