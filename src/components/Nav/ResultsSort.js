import React from 'react'

import CM from './styles.pcss'

const ResultsSort = () => {

    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div className={`${CM.resultsSortCriterion} ${CM.resultsSortUp}`}>Release date</div>
    </div>
}

export default ResultsSort
