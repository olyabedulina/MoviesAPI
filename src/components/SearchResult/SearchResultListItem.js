import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Popup from '../Popup'

import CM from './styles.pcss'

import { getMovie } from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import Modal from "../Modal";
import EditMovie from "../Modal/EditMovie";
import DeleteMovie from "../Modal/DeleteMovie";
import { getFilterItems } from "../../redux/selectors";

const SearchResultListItem = ({
    data,
    index,
    onMovieEdit,
    onMovieDelete,
    onMovieImageClick = Function.prototype,
}) => {
    const [displayPopup, setDisplayPopup] = useState(false);
    const [displayEditMovie, setDisplayEditMovie] = useState(false);
    const [displayDeleteMovie, setDisplayDeleteMovie] = useState(false);

    const dispatch = useDispatch()
    const filterItems = useSelector(getFilterItems)

    function handleMovieOptionsClick() {
        setDisplayPopup(true);
    }

    function handlePopupClose() {
        setDisplayPopup(false);
    }

    function handleMovieImageClick() {
        onMovieImageClick(data.id)
        dispatch(getMovie(data.id))
    }

    function handleMovieEditClick() {
        setDisplayEditMovie(true);
    }

    function handleMovieDeleteClick() {
        setDisplayDeleteMovie(true);
    }

    function handleEditModalClose() {
        setDisplayEditMovie(false);
    }

    function handleDeleteModalClose() {
        setDisplayDeleteMovie(false);
    }

    return <li className={`${CM.moviesListItem} ${CM.movie}`}>
        <div className={CM.movieImage}>
            <img
                className={CM.movieImageImg}
                src={data.poster_path}
                alt={data.title}
                onClick={handleMovieImageClick}
            />
        </div>
        <div className={CM.movieFooter}>
            <div className={CM.movieTitle}>{data.title}</div>
            <div className={CM.movieReleaseDate}>{data.release_date.slice(0, 4)}</div>
            <div className={CM.movieGenre}>{data.genres.join(', ')}</div>
        </div>
        <div className={CM.movieOptions} onClick={handleMovieOptionsClick}>...</div>
        <Popup
            itemId={data.id}
            showPopup={displayPopup}
            onPopupClose={handlePopupClose}
            onMovieEdit={handleMovieEditClick}
            onMovieDelete={handleMovieDeleteClick}
            onMovieImageClick={onMovieImageClick}/>

        { displayEditMovie ? <Modal onModalClose={handleEditModalClose}>
            <EditMovie
                genres={filterItems}
                item={data}
            />
        </Modal> : ''
        }

        { displayDeleteMovie ? <Modal onModalClose={handleDeleteModalClose}>
            <DeleteMovie
                item={data}
                onModalClose={handleDeleteModalClose}
            />
        </Modal> : ''
        }
    </li>
}

SearchResultListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        tagline: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        runtime: PropTypes.number,
        overview: PropTypes.string
    }).isRequired,
    index: PropTypes.number,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func,
    onMovieImageClick: PropTypes.func
};

export default SearchResultListItem
