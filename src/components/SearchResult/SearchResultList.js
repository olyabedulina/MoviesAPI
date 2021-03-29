import React from 'react'
// import PropTypes from 'prop-types'

import SearchResultListItem from './SearchResultListItem'

import CM from './styles.pcss'

const SearchResultList = ({
    items,
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype,
    onMovieImageClick = Function.prototype
}) => {

  return (items.length > 0) ? <ul className={CM.moviesList}>
      {
          // items.sort(sortNameToFuncMap[sortBy]).map((item, index) => <SearchResultListItem
          items.map((item, index) => <SearchResultListItem
              key={item.id}
              data={item}
              index={index}
              onMovieEdit={onMovieEdit}
              onMovieDelete={onMovieDelete}
              onMovieImageClick={onMovieImageClick}
              />
          )
      }
    </ul> : <div className={CM.emptyResult}>No movie found</div>
}

// SearchResultList.propTypes = {
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
//     sortBy: PropTypes.string,
//     onMovieEdit : PropTypes.func,
//     onMovieDelete : PropTypes.func,
//     onMovieImageClick: PropTypes.func
// };

export default SearchResultList
