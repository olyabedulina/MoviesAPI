import React from 'react'
import PropTypes from 'prop-types'

import FilterList from './FilterList'
import ResultsSort from './ResultsSort'

import CM from './styles.pcss'

const Nav = ({
    items,
    selectedItem,
    filters,
    sortBy,
    sortOrder,
    isOpenedDropdown,
    onIsOpenedDropdownChange
}) => {

    return <div className={CM.nav}>
        <FilterList
            items={items}
            selectedItem={selectedItem}
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
        />
        <ResultsSort
            sortBy={sortBy}
            sortOrder={sortOrder}
            selectedItem={selectedItem}
            filters={filters}
            isOpenedDropdown={isOpenedDropdown}
            onIsOpenedDropdownChange={onIsOpenedDropdownChange}
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
    sortOrder: PropTypes.string,
    isOpenedDropdown: PropTypes.bool,
    onIsOpenedDropdownChange : PropTypes.func
};

export default Nav
