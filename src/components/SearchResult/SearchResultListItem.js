import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const SearchResultListItem = ({
    data,
    index
}) => {

    return <li className={`${CM.movies_list_item} ${CM.movie}`}>
        <div className={CM.movie_image}>
            <img
                className={CM.movie_image__img}
                src={require(`${data.src}`)}
                alt={data.title}
            />
        </div>
        <div className={CM.movie_footer}>
            <div className={CM.movie_title}>{data.title}</div>
            <div className={CM.movie_release_date}>{data.releaseDate}</div>
            <div className={CM.movie_genre}>{data.genre}</div>
        </div>
        <div className={CM.movie_options}>...</div>
    </li>
}

SearchResultListItem.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default SearchResultListItem