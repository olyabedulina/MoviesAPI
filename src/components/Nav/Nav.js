import React from 'react'
import PropTypes from 'prop-types'

import FilterList from './FilterList'
import ResultsSort from './ResultsSort'

import CM from './styles.pcss'

const Nav = ({
    items,
    sortByReleaseUp,
    onChangeSort
}) => {

    return <div className={CM.nav}>
        <FilterList
            items={items}
        />
        <ResultsSort
            sortByReleaseUp={sortByReleaseUp}
            onChangeSort={onChangeSort}
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
    sortByReleaseUp: PropTypes.bool,
    onChangeSort: PropTypes.func
};

export default Nav