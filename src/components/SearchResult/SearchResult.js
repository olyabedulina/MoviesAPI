import React from 'react'
import PropTypes from 'prop-types'

import SearchResultList from './SearchResultList'

import CM from './styles.pcss'

const SearchResult = ({
    items,
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype,
    onMovieImageClick = Function.prototype
}) => {

    return <div className={CM.searchResult}>
        <div className={CM.searchCount}>
            <strong className={CM.searchCountHightlight}>{(items) ? items.length : 0}</strong> movies found
        </div>
        <SearchResultList
            items={items}
            onMovieEdit={onMovieEdit}
            onMovieDelete={onMovieDelete}
            onMovieImageClick={onMovieImageClick}
        />
    </div>
}

SearchResult.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func,
    onMovieImageClick: PropTypes.func
};

export default SearchResult
