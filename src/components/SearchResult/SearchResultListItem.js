import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Popup from '../Popup'

import CM from './styles.pcss'

const SearchResultListItem = ({
    data,
    index,
    onMovieEdit,
    onMovieDelete,
}) => {
    const [displayPopup, setDisplayPopup] = useState(false);

    function handleMovieOptionsClick() {
        setDisplayPopup(true);
    }

    function handlePopupClose() {
        setDisplayPopup(false);
    }

    return <li className={`${CM.moviesListItem} ${CM.movie}`}>
        <div className={CM.movieImage}>
            <img
                className={CM.movieImageImg}
                src={require(`${data.src}`)}
                alt={data.title}
            />
        </div>
        <div className={CM.movieFooter}>
            <div className={CM.movieTitle}>{data.title}</div>
            <div className={CM.movieReleaseDate}>{data.releaseDate}</div>
            <div className={CM.movieGenre}>{data.genre}</div>
        </div>
        <div className={CM.movieOptions} onClick={handleMovieOptionsClick}>...</div>
        <Popup
            showPopup={displayPopup}
            onPopupClose={handlePopupClose}
            onMovieEdit={onMovieEdit}
            onMovieDelete={onMovieDelete} />
    </li>
}

SearchResultListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
        releaseDate: PropTypes.number,
        genre: PropTypes.string
    }).isRequired,
    index: PropTypes.number,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func
};

export default SearchResultListItem