import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import usePersistentState from '../hooks/usePersistentState'
import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import MovieDetails from './MovieDetails'

import Modal from './Modal'
import AddMovie from './Modal/AddMovie'
import EditMovie from './Modal/EditMovie'
import DeleteMovie from './Modal/DeleteMovie'

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

    const [displayMode, setDisplayMode] = useState('basic');
    const [movieDetailsID, setMovieDetailsID] = useState('');

    const [isOpenedDropdown, setIsOpenedDropdown] = useState(false)
    function handleIsOpenedDropdownChange() {
        setIsOpenedDropdown(!isOpenedDropdown)
    }

    const [editMovieID, setEditMovieID] = useState('');
    const [deleteMovieID, setDeleteMovieID] = useState('');

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

    /* ----------- end Put uploaded data into States ----------- */

    function handleModalClose() {
        setDisplayMode('basic');
    }

    function handleAddNewMovie() {
        setDisplayMode('add');
    }

    function handleEditMovie(id) {
        setEditMovieID(id);
        setDisplayMode('edit');
    }

    function handleDeleteMovie(id) {
        setDeleteMovieID(id);
        setDisplayMode('delete');
    }

    const handleMovieImageClickCallback = useCallback(
        (id) => { setMovieDetailsID(id) }, []
    )

    function handleMagnifierClick() {
        setMovieDetailsID('');
    }

    return <>
        <ErrorBoundary>
            <div className="app">
                { (movieDetailsID && currentMovie) ? <MovieDetails
                    movie={currentMovie}
                    onMagnifierClick={handleMagnifierClick}
                /> : <Header
                    onAddNewMovie={handleAddNewMovie}
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
                    onMovieEdit={handleEditMovie}
                    onMovieDelete={handleDeleteMovie}
                    onMovieImageClick={handleMovieImageClickCallback}
                    items={searchResultItems}
                />
                <Footer/>
                {
                    {
                        'add': <Modal onModalClose={handleModalClose}>
                            <AddMovie
                                genres={filterItems}
                                onModalClose={handleModalClose}
                            />
                        </Modal>,
                        'edit': <Modal onModalClose={handleModalClose}>
                            <EditMovie
                                genres={filterItems}
                                item={searchResultItems.find((item) => (item.id === editMovieID))}
                                onModalClose={handleModalClose}
                            />
                        </Modal>,
                        'delete': <Modal onModalClose={handleModalClose}>
                            <DeleteMovie
                                item={searchResultItems.find((item) => (item.id === deleteMovieID))}
                                onModalClose={handleModalClose}
                            />
                        </Modal>,
                    }[displayMode]
                }
            </div>
        </ErrorBoundary>
    </>
}

export default App
