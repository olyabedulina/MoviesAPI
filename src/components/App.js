import React, { useState, useEffect, useCallback } from 'react'

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

/* ----------- Upload data from files ----------- */
import {searchResultItemsData} from './data/searchResultItemsData'
import {filterItemsData} from './data/filterItemsData'
/* ----------- end Upload data from files ----------- */

const App = () => {
    const [displayMode, setDisplayMode] = useState('basic');
    const [movieDetailsID, setMovieDetailsID] = useState('');
    const [movieFilterID, setMovieFilterID] = usePersistentState('0', 'movieFilter');

    const [sortBy, setSortBy] = usePersistentState('date', 'sortBy')
    function handleSortChange(nextSortBy) {
        setSortBy(nextSortBy)
    }

    const [isOpenedDropdown, setIsOpenedDropdown] = useState(false)
    function handleIsOpenedDropdownChange() {
        setIsOpenedDropdown(!isOpenedDropdown)
    }

    const [editMovieID, setEditMovieID] = useState('');
    const [deleteMovieID, setDeleteMovieID] = useState('');

    /* ----------- Put uploaded data into States ----------- */
    const [searchResultItems, setSearchResultItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    /* ----------- end Put uploaded data into States ----------- */

    useEffect(() => {
        setSearchResultItems(searchResultItemsData)
        setFilterItems(filterItemsData)
    }, [])

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

    // function handleMovieImageClick(id) {
    //     setMovieDetailsID(id);
    // }
    const handleMovieImageClickCallback = useCallback(
        (id) => { setMovieDetailsID(id) }, []
    )

    function handleMagnifierClick() {
        setMovieDetailsID('');
    }

    function handleFilterClick(id) {
        setMovieFilterID(id)
    }

    return <>
        <ErrorBoundary>
            <div className="app">
                { movieDetailsID.length ? <MovieDetails
                    movie={searchResultItems.find((item) => (item.id === movieDetailsID))}
                    onMagnifierClick={handleMagnifierClick}
                /> : <Header
                    onAddNewMovie={handleAddNewMovie}
                /> }
                <Nav
                    items={filterItems.filter((item) => (item.isIncludedInFilter))}
                    selectedItem={movieFilterID}
                    sortBy={sortBy}
                    onSortChange={handleSortChange}
                    onFilterClick={handleFilterClick}
                    isOpenedDropdown={isOpenedDropdown}
                    onIsOpenedDropdownChange={handleIsOpenedDropdownChange}
                />
                <SearchResult
                    sortBy={sortBy}
                    onMovieEdit={handleEditMovie}
                    onMovieDelete={handleDeleteMovie}
                    onMovieImageClick={handleMovieImageClickCallback}
                    items={
                        searchResultItems.filter((item) => {
                            switch (movieFilterID) {
                                case '0':
                                    return true
                                default:
                                    return item.genre.some(({ id }) => (id === movieFilterID))
                            }
                        })
                    }
                />
                <Footer/>
                {
                    {
                        'add': <Modal onModalClose={handleModalClose}>
                            <AddMovie
                                genres={filterItems}
                            />
                        </Modal>,
                        'edit': <Modal onModalClose={handleModalClose}>
                            <EditMovie
                                genres={filterItems}
                                item={searchResultItems.find((item) => (item.id === editMovieID))}
                            />
                        </Modal>,
                        'delete': <Modal onModalClose={handleModalClose}>
                            <DeleteMovie
                                item={searchResultItems.find((item) => (item.id === deleteMovieID))}
                            />
                        </Modal>,
                    }[displayMode]
                }
            </div>
        </ErrorBoundary>
    </>
}

export default App
