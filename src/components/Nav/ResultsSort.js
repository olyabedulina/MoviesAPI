import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Dropdown from '../Dropdown'

import CM from './styles.pcss'

const sortNameToDisplayNameMap = {
    date: 'Release date',
    title: 'Title'
}

const ResultsSort = ({
    sortBy,
    onSortChange
}) => {
    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={CM.resultsSortCriterion}>
            <Dropdown
                theme='resultsSortCriterion'
                placeholder={sortNameToDisplayNameMap[sortBy]}>
                <div onClick={() => { onSortChange('date') }}>Release date</div>
                <div onClick={() => { onSortChange('title') }}>Title</div>
            </Dropdown>
        </div>

    </div>
}

ResultsSort.propTypes = {
    sortByReleaseUp: PropTypes.bool,
    onChangeSort: PropTypes.func
};

export default ResultsSort
