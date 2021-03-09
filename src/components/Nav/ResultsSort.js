import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const ResultsSort = ({
    sortByReleaseUp,
    onChangeSort
}) => {

    let sortClass = sortByReleaseUp ? 'Up' : 'Down';

    function handleClick() {
        onChangeSort(!sortByReleaseUp);
    }

    return <div className={CM.resultsSort}>
        <h2 className={CM.resultsSortLabel}>Sort by</h2>
        <div
            className={`${CM.resultsSortCriterion} ${CM["resultsSort" + sortClass] || ''}`}
            onClick={handleClick}>
            Release date
        </div>
    </div>
}

ResultsSort.propTypes = {
    sortByReleaseUp: PropTypes.bool,
    onChangeSort: PropTypes.func
};

export default ResultsSort
