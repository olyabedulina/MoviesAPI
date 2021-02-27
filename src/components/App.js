import React from 'react'

import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'

const App = () => {

    return <>
        <div className="app">
            <Header/>
            <ErrorBoundary>
                <Nav/>
            </ErrorBoundary>
            <SearchResult/>
            <Footer/>
        </div>
    </>
}

export default App
