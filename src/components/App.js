import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import usePersistentState from '../hooks/usePersistentState'
import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import MovieDetails from './MovieDetails'

import { initApp } from '../redux/actions'

import { getSearchResultItems } from '../redux/selectors'
import { getFilterItems } from '../redux/selectors'
import { getCurrentMovie } from '../redux/selectors'
import { getSortBy } from '../redux/selectors'
import { getSortOrder } from '../redux/selectors'
import { getFilters } from '../redux/selectors'
import { getSelectedItem } from '../redux/selectors'

const App = () => {
    const dispatch = useDispatch()
    const [movieDetailsID, setMovieDetailsID] = useState('');

    const [isOpenedDropdown, setIsOpenedDropdown] = useState(false)
    function handleIsOpenedDropdownChange() {
        setIsOpenedDropdown(!isOpenedDropdown)
    }

    useEffect(() => {
        dispatch(initApp())
    }, [])

    const searchResultItems = useSelector(getSearchResultItems)
    const filterItems = useSelector(getFilterItems)
    const currentMovie = useSelector(getCurrentMovie)
    const sortBy = useSelector(getSortBy)
    const sortOrder = useSelector(getSortOrder)
    const filters = useSelector(getFilters)
    const movieFilterID = useSelector(getSelectedItem)

    const handleMovieImageClickCallback = useCallback(
        (id) => { setMovieDetailsID(id) }, []
    )

    function handleMagnifierClick() {
        setMovieDetailsID('');
    }

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                { (movieDetailsID && currentMovie) ? <MovieDetails
                    movie={currentMovie}
                    onMagnifierClick={handleMagnifierClick}
                /> : <Header
                    genres={filterItems}
                /> }
                <Nav
                    items={filterItems.filter((item) => (item.isIncludedInFilter))}
                    selectedItem={movieFilterID}
                    filters={filters}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    isOpenedDropdown={isOpenedDropdown}
                    onIsOpenedDropdownChange={handleIsOpenedDropdownChange}
                />
                <SearchResult
                    onMovieImageClick={handleMovieImageClickCallback}
                    items={searchResultItems}
                />
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default App
