import React from 'react'
import PropTypes from 'prop-types'

import SearchResultListItem from './SearchResultListItem'

import CM from './styles.pcss'

const SearchResultList = ({
    items,
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype
}) => {

  return (items.length > 0) ? <ul className={CM.moviesList}>
      {
          items.map((item, index) => <SearchResultListItem
              key={item.id}
              data={item}
              index={index}
              onMovieEdit={onMovieEdit}
              onMovieDelete={onMovieDelete}
              />
          )
      }
    </ul> : <div className={CM.emptyResult}>No movie found</div>
}

SearchResultList.propTypes = {
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
    onMovieDelete : PropTypes.func
};

export default SearchResultList