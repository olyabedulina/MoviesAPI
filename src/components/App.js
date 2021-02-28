import React from 'react'

import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'

const App = () => {

    return <>
        <ErrorBoundary>
            <div className="app">
                <Header/>
                <Nav/>
                <SearchResult/>
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default App
