import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import MoviePage from '../components/MoviePage'
import NotFoundPage from '../components/NotFoundPage'
import HomePage from './HomePage'

const App = () => {
    return <>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route
                path="/film/:id"
                render={
                    ({ match: { params: { id: id } } }) => {
                        return id ? <MoviePage movieId={id} /> : null
                    }
                }
            />
            <Route
                path="/search/:searchQuery"
                render={
                    ({ match: { params: { searchQuery: searchQuery } } }) => {
                        return searchQuery ? <HomePage search={searchQuery} /> : null
                    }
                }
            />
            <Route
                path="/search/"
                render={
                    () => {
                        return <Redirect to="/" />
                    }
                }
            />
            <Route path="*">
                <NotFoundPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    </>
}

export default App
