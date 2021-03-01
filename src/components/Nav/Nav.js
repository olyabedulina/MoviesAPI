import React from 'react'

import FilterList from './FilterList'
import ResultsSort from './ResultsSort'

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
        <ResultsSort/>
    </div>
}

export default Nav