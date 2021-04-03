import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import DropdownControlled from '../DropdownControlled'

import CM from './styles.pcss'
import { sortMoviesBy } from '../../redux/actions'

const sortNameToDisplayNameMap = {
    date: 'Release date',
    title: 'Title',
    vote_average: 'Rating'
}

const ResultsSort = ({
    sortBy,
    onSortChange,
    isOpenedDropdown,
    onIsOpenedDropdownChange
}) => {
    const dispatch = useDispatch()

    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={CM.resultsSortCriterion}>
            <DropdownControlled
                theme='resultsSortCriterion'
                placeholder={sortNameToDisplayNameMap[sortBy]}
                isOpened={isOpenedDropdown}
                onIsOpenedChange={onIsOpenedDropdownChange}
            >
                <div onClick={() => { onSortChange('date'); dispatch(sortMoviesBy('release_date')); onIsOpenedDropdownChange() }}>Release date</div>
                <div onClick={() => { onSortChange('title'); dispatch(sortMoviesBy('title')); onIsOpenedDropdownChange() }}>Title</div>
                <div onClick={() => { onSortChange('vote_average'); dispatch(sortMoviesBy('vote_average')); onIsOpenedDropdownChange() }}>Rating</div>
            </DropdownControlled>
        </div>

    </div>
}

ResultsSort.propTypes = {
    sortBy: PropTypes.string,
    onSortChange: PropTypes.func,
    isOpenedDropdown: PropTypes.bool,
    onIsOpenedDropdownChange : PropTypes.func
};

export default ResultsSort
