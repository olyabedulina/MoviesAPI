import React from 'react'
import PropTypes from 'prop-types'

import SearchResultListItem from './SearchResultListItem'

import CM from './styles.pcss'

function sortByDate(movieA, movieB) {
    if (movieA.releaseDate < movieB.releaseDate) {
        return 1;
    }
    if (movieA.releaseDate > movieB.releaseDate) {
        return -1;
    }
    return 0;
}

function sortByTitle(movieA, movieB) {
    if (movieA.title < movieB.title) {
        return -1;
    }
    if (movieA.title > movieB.title) {
        return 1;
    }
    return 0;
}

const sortNameToFuncMap = {
    date: sortByDate,
    title: sortByTitle
}

const SearchResultList = ({
    items,
    sortBy, // 'date' | 'title'
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype,
    onMovieImageClick = Function.prototype
}) => {

  return (items.length > 0) ? <ul className={CM.moviesList}>
      {
          items.sort(sortNameToFuncMap[sortBy]).map((item, index) => <SearchResultListItem
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

SearchResultList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            src: PropTypes.string,
            title: PropTypes.string,
            releaseDate: PropTypes.number,
            genre: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    text: PropTypes.string,
                })
            ),
            rating: PropTypes.string,
            movieDuration: PropTypes.shape({
                timing: PropTypes.number,
                units: PropTypes.string
            }),
            description: PropTypes.string
        })
    ).isRequired,
    sortBy: PropTypes.string,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func,
    onMovieImageClick: PropTypes.func
};

export default SearchResultList