import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const SearchResultListItem = ({
    data,
    index
}) => {

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
        <div className={CM.movieOptions}>...</div>
    </li>
}

SearchResultListItem.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default SearchResultListItem