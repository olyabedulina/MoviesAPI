import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DropdownControlled from '../DropdownControlled'

import CM from './styles.pcss'

const sortNameToDisplayNameMap = {
    date: 'Release date',
    title: 'Title'
}

const ResultsSort = ({
    sortBy,
    onSortChange,
    isOpenedDropdown,
    onIsOpenedDropdownChange
}) => {
    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={CM.resultsSortCriterion}>
            <DropdownControlled
                theme='resultsSortCriterion'
                placeholder={sortNameToDisplayNameMap[sortBy]}
                isOpened={isOpenedDropdown}
                onIsOpenedChange={onIsOpenedDropdownChange}
            >
                <div onClick={() => { onSortChange('date'); onIsOpenedDropdownChange() }}>Release date</div>
                <div onClick={() => { onSortChange('title'); onIsOpenedDropdownChange() }}>Title</div>
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
