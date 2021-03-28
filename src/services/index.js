import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export function loadMovies() {
    return axios.get(`${baseUrl}/movies`)
        .then(response => response.data.data)
}

export function addMovie(movieInfo) {
    return axios.post(`${baseUrl}/movies`, movieInfo)
        .then(response => console.log(response))
}
