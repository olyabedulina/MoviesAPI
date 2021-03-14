import React from 'react'
import PropTypes from 'prop-types'

import SearchResultList from './SearchResultList'

import CM from './styles.pcss'

const SearchResult = ({
    sortBy,
    items,
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype,
    onMovieImageClick = Function.prototype
}) => {

    return <div className={CM.searchResult}>
        <div className={CM.searchCount}>
            <strong className={CM.searchCountHightlight}>{items.length}</strong> movies found
        </div>
        <SearchResultList
            sortBy={sortBy}
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
            id: PropTypes.string,
            src: PropTypes.string,
            title: PropTypes.string,
            releaseDate: PropTypes.number,
            genre: PropTypes.string
        })
    ).isRequired,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func,
    onMovieImageClick: PropTypes.func
};

export default SearchResult