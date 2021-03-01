import React from 'react'

import CM from './styles.pcss'

const ResultsSort = () => {

    return <div className={CM.results_sort}>
        <h2 className={CM.results_sort_label}>Sort by</h2>
        <div className={`${CM.results_sort_criterion} ${CM.results_sort_up}`}>Release date</div>
    </div>
}

export default ResultsSort
