import React from 'react'

import FilterList from './FilterList'

import CM from './styles.pcss'

let filterItems = [
    {
        id: '1',
        name: 'All',
        isSelected: true
    },
    {
        id: '2',
        name: 'Documentary',
        isSelected: false
    },
    {
        id: '3',
        name: 'Comedy',
        isSelected: false
    },
    {
        id: '4',
        name: 'Horror',
        isSelected: false
    },
    {
        id: '5',
        name: 'Crime',
        isSelected: false
    }
];

const Nav = () => {

    return <div className={CM.nav}>
        <FilterList
            items={filterItems}
        />
        <div className={CM.results_sort}>
            <h2 className={CM.results_sort_label}>Sort by</h2>
            <div className={`${CM.results_sort_criterion} ${CM.results_sort_up}`}>Release date</div>
        </div>
    </div>
}

export default Nav