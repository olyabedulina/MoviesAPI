import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import Popup from '../Popup'

import CM from './styles.pcss'

const SearchResultListItem = ({
    data,
    index,
    onMovieEdit,
    onMovieDelete,
    onMovieImageClick = Function.prototype,
}) => {
    const [displayPopup, setDisplayPopup] = useState(false);

    function handleMovieOptionsClick() {
        setDisplayPopup(true);
    }

    function handlePopupClose() {
        setDisplayPopup(false);
    }

    function handleMovieImageClick() {
        onMovieImageClick(data.id)
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
            onMovieEdit={onMovieEdit}
            onMovieDelete={onMovieDelete}
            onMovieImageClick={onMovieImageClick}/>
    </li>
}

// SearchResultListItem.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.string,
//         src: PropTypes.string,
//         title: PropTypes.string,
//         releaseDate: PropTypes.string,
//         genre: PropTypes.arrayOf(
//             PropTypes.shape({
//                 id: PropTypes.string,
//                 name: PropTypes.string,
//             })
//         ),
//         rating: PropTypes.string,
//         movieDuration: PropTypes.shape({
//             timing: PropTypes.number,
//             units: PropTypes.string
//         }),
//         url: PropTypes.string,
//         description: PropTypes.string
//     }).isRequired,
//     index: PropTypes.number,
//     onMovieEdit : PropTypes.func,
//     onMovieDelete : PropTypes.func,
//     onMovieImageClick: PropTypes.func
// };

export default SearchResultListItem
