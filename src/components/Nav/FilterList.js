import React from 'react'
import PropTypes from 'prop-types'

import FilterListItem from './FilterListItem'

import CM from './styles.pcss'

const FilterList = ({
    items,
    selectedItem,
    onFilterClick
}) => {

    return (items.length > 0) ? <ul className={CM.resultsFilter}>
        {
            items.map((item, index) => <FilterListItem
                    key={item.id}
                    data={item}
                    index={index}
                    selectedItem={selectedItem}
                    onFilterClick={onFilterClick}
                />
            )
        }
    </ul> : <div>No filter items</div>

    // /* Generate error for ErrorBoundary */
    // throw Error("Filter List Test Error!");
    // return <></>;
}

FilterList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isSelected: PropTypes.bool
        })
    ).isRequired,
    selectedItem: PropTypes.string,
    onFilterClick: PropTypes.func
};

export default FilterList
