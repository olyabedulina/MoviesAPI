import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'
import { useDispatch } from 'react-redux'
import { filterMoviesBy } from '../../redux/actions'

import { getFilterItems } from '../../redux/selectors'
import { useSelector } from "react-redux";

const FilterListItem = ({
    data,
    index,
    selectedItem,
    onFilterClick
}) => {
    const dispatch = useDispatch()
    const filterItems = useSelector(getFilterItems)

    function handleClick(event) {
        event.preventDefault();
        onFilterClick(data.id);

        const filters = filterItems.find(({id}) => (id == data.id)).name
        dispatch(
            filterMoviesBy(
                (filters.includes('All')) ? '' : filters
            )
        )
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
