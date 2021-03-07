import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const ResultsSort = ({sortByReleaseUp}) => {

    let sortClass = sortByReleaseUp ? 'Up' : 'Down';

    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={`${CM.resultsSortCriterion} ${CM["resultsSort" + sortClass] || ''}`}>Release date</div>
    </div>
}

ResultsSort.propTypes = {
    sortByReleaseUp: PropTypes.bool
};

export default ResultsSort
