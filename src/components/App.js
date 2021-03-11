import React, { useState, useEffect } from 'react'

import Header from './Header'
import Nav from './Nav'
import SearchResult from './SearchResult'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal'

/* ----------- Upload data from files ----------- */
import {searchResultItemsData} from './data/searchResultItemsData'
import {filterItemsData} from './data/filterItemsData'
import {ModalFieldListAddData} from './data/ModalFieldListAddData'
import {ModalFieldListEditData} from './data/ModalFieldListEditData'
import {ModalFieldListDeleteData} from './data/ModalFieldListDeleteData'
/* ----------- end Upload data from files ----------- */

const App = () => {
    const [displayMode, setDisplayMode] = useState('basic');
    const [sortByReleaseUp, setSortByReleaseUp] = useState(true);
    const [selectedDropdownData, setselectedDropdownData] = React.useState([]);

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

    function handleChangeSort(newSortStatus) {
        setSortByReleaseUp(newSortStatus);
    }

    function handleSelectItem() {
        alert(1);
    }

    return <>
        <ErrorBoundary>
            <div className="app">
                <Header
                    onAddNewMovie={handleAddNewMovie}
                />
                <Nav
                    items={filterItems}
                    sortByReleaseUp={sortByReleaseUp}
                    onChangeSort={handleChangeSort}/>
                <SearchResult
                    onMovieEdit={handleEditMovie}
                    onMovieDelete={handleDeleteMovie}
                    items={searchResultItems}
                />
                <Footer/>
                {
                    {
                        'add': <Modal
                            fieldsList={ModalFieldListAdd}
                            onModalClose={handleModalClose} />,
                        'edit': <Modal
                            fieldsList={ModalFieldListEdit}
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
