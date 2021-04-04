import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const FilterListItem = ({
    data,
    index,
    selectedItem,
    onFilterClick
}) => {

    function handleClick(event) {
        event.preventDefault();
        onFilterClick(data.id);
    }

    return <li className={(data.id === selectedItem) ? `${CM.resultsFilterItem} ${CM.selected}`: `${CM.resultsFilterItem}`}>
        <a
            href="#"
            className={CM.resultsFilterLink}
            onClick={handleClick}
        >{data.name}</a>
    </li>
}

FilterListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        isSelected: PropTypes.bool
    }).isRequired,
    index: PropTypes.number,
    selectedItem: PropTypes.string,
    onFilterClick: PropTypes.func
};

export default FilterListItem