import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const FilterListItem = ({
    data,
    index
}) => {

    return <li className={data.isSelected ? `${CM.resultsFilterItem} ${CM.selected}`: `${CM.resultsFilterItem}`}>
        <a
            href="#"
            className={CM.resultsFilterLink}
        >{data.name}</a>
    </li>
}

FilterListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        isSelected: PropTypes.bool
    }).isRequired,
    index: PropTypes.number
};

export default FilterListItem