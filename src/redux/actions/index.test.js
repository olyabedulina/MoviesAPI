import proxyquire from 'proxyquire'
import sinon from 'sinon'

import {
    resetApp
} from './index'

describe('"resetApp" action creator', () => {
    it('produces correct action', () => {
        const actual = resetApp()

        const expected = {
            type: 'RESET__APP'
        }

        expect(actual).toEqual(expected)
    })
});

describe('"loadMovies" action creator', () => {

    it('dispatches "MOVIES__LOAD__INIT" action', () => {
        const dispatch = sinon.spy()
        const loadMoviesServiceMock = () => Promise.resolve()

        const { loadMovies } = proxyquire('./index', {
            loadMovies: loadMoviesServiceMock
        })

        const thunk = loadMovies()
        thunk(dispatch)

        const dispatchCalls = dispatch.getCalls()

        expect(dispatchCalls.length).toEqual(1)
        expect(dispatchCalls[0].args[0]).toEqual({
            type: 'MOVIES__LOAD__INIT'
        })
    })

    // it('it calls service function with correct params', () => {
    //     // const loadMoviesServiceMock = sinon.spy(() => Promise.resolve())
    //
    //     const { loadMovies } = proxyquire('./index', {
    //         // loadMovies: loadMoviesServiceMock
    //         loadMovies: (a,b,c) => {
    //             console.log(a,b,c)
    //         }
    //     })
    //
    //     const thunk = loadMovies()
    //     thunk(Function.prototype)
    //
    //     // const loadMoviesServiceMockCalls = loadMoviesServiceMock.getCalls()
    //
    //     // expect(loadMoviesServiceMockCalls.length).toEqual(1)
    // })


})
