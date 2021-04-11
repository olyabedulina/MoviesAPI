import React, {useEffect} from 'react'

import usePersistentState from '../hooks/usePersistentState'
import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import {useDispatch} from "react-redux";
import {initApp} from "../redux/actions";
import {resetApp} from "../redux/actions";

const HomePage = ({
    search = ''
}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (search.length) {
            dispatch(initApp(search))
        }
        else {
            dispatch(resetApp())
        }
    }, [search])

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                <Header />
                <Nav />
                <SearchResult />
                <Footer />
            </div>
        </ErrorBoundary>
    </>
}

export default HomePage
