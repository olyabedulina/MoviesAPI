import React, { useState, useEffect } from 'react'

import usePersistentState from '../hooks/usePersistentState'
import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'
import MovieDetails from './MovieDetails'

/* ----------- Upload data from files ----------- */
import {searchResultItemsData} from './data/searchResultItemsData'
import {filterItemsData} from './data/filterItemsData'
import {ModalFieldListAddData} from './data/ModalFieldListAddData'
import {ModalFieldListEditData} from './data/ModalFieldListEditData'
import {ModalFieldListDeleteData} from './data/ModalFieldListDeleteData'
/* ----------- end Upload data from files ----------- */

const App = () => {
    const [displayMode, setDisplayMode] = useState('basic');
    const [movieDetailsID, setMovieDetailsID] = useState('');
    const [movieFilterID, setMovieFilterID] = usePersistentState('0', 'movieFilter');

    // const [sortBy, setSortBy] = useState('date')
    const [sortBy, setSortBy] = usePersistentState('date', 'sortBy')
    function handleSortChange(nextSortBy) {
        setSortBy(nextSortBy)
    }

    /* ----------- Put uploaded data into States ----------- */
    const [searchResultItems, setSearchResultItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [ModalFieldListAdd, setModalFieldListAdd] = useState({});
    const [ModalFieldListEdit, setModalFieldListEdit] = useState({});
    const [ModalFieldListDelete, setModalFieldListDelete] = useState({});
    /* ----------- end Put uploaded data into States ----------- */

    useEffect(() => {
        setSearchResultItems(searchResultItemsData)
        setFilterItems(filterItemsData)
        setModalFieldListAdd(ModalFieldListAddData)
        setModalFieldListEdit(ModalFieldListEditData)
        setModalFieldListDelete(ModalFieldListDeleteData)
    }, [])

    function handleModalClose() {
        setDisplayMode('basic');
    }

    function handleAddNewMovie() {
        setDisplayMode('add');
    }

    function handleEditMovie() {
        setDisplayMode('edit');
    }

    function handleDeleteMovie() {
        setDisplayMode('delete');
    }

    function handleMovieImageClick(id) {
        setMovieDetailsID(id);
    }

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
                />
                <SearchResult
                    sortBy={sortBy}
                    onMovieEdit={handleEditMovie}
                    onMovieDelete={handleDeleteMovie}
                    onMovieImageClick={handleMovieImageClick}
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
                        'add': <Modal
                            fieldsList={ModalFieldListAdd}
                            genres={filterItems}
                            onModalClose={handleModalClose} />,
                        'edit': <Modal
                            fieldsList={ModalFieldListEdit}
                            genres={filterItems}
                            // selectedGenresArray={searchResultItems.find((item) => (item.id === movieDetailsID)).genre}
                            onModalClose={handleModalClose} />,
                        'delete': <Modal
                            fieldsList={ModalFieldListDelete}
                            onModalClose={handleModalClose} />,
                    }[displayMode]
                }
            </div>
        </ErrorBoundary>
    </>
}

export default App
