import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export function loadMovies({
    filters = '',
    sortBy = '',
    sortOrder = ''
}) {
    return axios.get(`${baseUrl}/movies`, {
        params: {
            filter: filters,
            sortBy: sortBy,
            sortOrder: sortOrder
        }
        }).then(response => {
        // debugger;
        return response.data.data
    })
}

export function addMovie(movieInfo) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return axios.post(`${baseUrl}/movies`, movieInfo, { headers })
        .then(response => response.data)
}

export function deleteMovie(movieId) {
    // console.log(`${baseUrl}/movies/${movieId}`)
    // debugger
    return axios.delete(`${baseUrl}/movies/${movieId}`)
        .then(response => response.data)
}
