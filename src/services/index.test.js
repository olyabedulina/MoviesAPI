import {
    loadMovies,
    getMovie,
    deleteMovie,
    editMovie,
    addMovie
} from './index'

//
// ----------------- Transparent box test
//

describe('loadMovies service function works', () => {

    it('loadMovies service function works', () => {
        const result = { foo: 'bar' }
        const loadMoviesMock = () => result

        const testResult = loadMovies({ __loadMovies: loadMoviesMock })

        expect(testResult).toEqual(result)
    })
})

describe('getMovie service function works', () => {

    it('getMovie service function works', () => {
        const result = { foo: 'bar' }
        const getMovieMock = () => result

        const testResult = getMovie({ __getMovie: getMovieMock })

        expect(testResult).toEqual(result)
    })
})

describe('deleteMovie service function works', () => {

    it('deleteMovie service function works', () => {
        const result = 'id'
        const deleteMovieMock = () => result

        const testResult = deleteMovie({ __deleteMovie: deleteMovieMock })

        expect(testResult).toEqual(result)
    })
})

describe('editMovie service function works', () => {

    it('editMovie service function works', () => {
        const result = { foo: 'bar' }
        const editMovieMock = () => result

        const testResult = editMovie({ __editMovie: editMovieMock })

        expect(testResult).toEqual(result)
    })
})

describe('addMovie service function works', () => {

    it('addMovie service function works', () => {
        const result = { foo: 'bar', bar: 'foo' }
        const addMovieMock = () => result

        const testResult = addMovie({ __addMovie: addMovieMock })

        expect(testResult).toEqual(result)
    })

})
