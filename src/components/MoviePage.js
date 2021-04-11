import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import usePersistentState from '../hooks/usePersistentState'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import MovieDetails from './MovieDetails'

import { initApp } from '../redux/actions'

const MoviePage = ({movieId}) => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(initApp())
    // }, [])

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                <MovieDetails movieId={movieId} />
                <Nav />
                <SearchResult />
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default MoviePage
