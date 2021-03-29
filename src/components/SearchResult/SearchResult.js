import React from 'react'
// import PropTypes from 'prop-types'

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

// SearchResult.propTypes = {
//     sortBy: PropTypes.string,
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string,
//             src: PropTypes.string,
//             title: PropTypes.string,
//             releaseDate: PropTypes.string,
//             genre: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     id: PropTypes.string,
//                     text: PropTypes.string,
//                 })
//             ),
//             rating: PropTypes.string,
//             movieDuration: PropTypes.shape({
//                 timing: PropTypes.number,
//                 units: PropTypes.string
//             }),
//             url: PropTypes.string,
//             description: PropTypes.string
//         })
//     ).isRequired,
//     onMovieEdit : PropTypes.func,
//     onMovieDelete : PropTypes.func,
//     onMovieImageClick: PropTypes.func
// };

export default SearchResult
