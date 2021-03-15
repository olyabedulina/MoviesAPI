import React from 'react'
import PropTypes from 'prop-types'

import FilterList from './FilterList'
import ResultsSort from './ResultsSort'

import CM from './styles.pcss'

const Nav = ({
    items,
    selectedItem,
    sortBy,
    onSortChange,
    onFilterClick
}) => {

    return <div className={CM.nav}>
        <FilterList
            items={items}
            selectedItem={selectedItem}
            onFilterClick={onFilterClick}
        />
        <ResultsSort
            sortBy={sortBy}
            onSortChange={onSortChange}
        />
    </div>
}

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isSelected: PropTypes.bool
        })
    ).isRequired,
    selectedItem: PropTypes.string,
    sortBy: PropTypes.string,
    onSortChange: PropTypes.func,
    onFilterClick: PropTypes.func
};

export default Nav