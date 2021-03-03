import React from 'react'
import PropTypes from 'prop-types'

import SearchResultListItem from './SearchResultListItem'

import CM from './styles.pcss'

const SearchResultList = ({
  items
}) => {

  return (items.length > 0) ? <ul className={CM.moviesList}>
      {
          items.map((item, index) => <SearchResultListItem
              key={item.id}
              data={item}
              index={index}
              />
          )
      }
    </ul> : <div className={CM.emptyResult}>No movie found</div>
}

SearchResultList.propTypes = {
    items: PropTypes.array.isRequired
};

export default SearchResultList