import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const FilterListItem = ({
    data,
    index
}) => {

    return <li className={data.isSelected ? `${CM.results_filter_item} ${CM.selected}`: `${CM.results_filter_item}`}>
        <a
            href="#"
            className={CM.results_filter_link}
        >{data.name}</a>
    </li>
}

FilterListItem.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default FilterListItem