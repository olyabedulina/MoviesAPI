import React from 'react'

import CM from './styles.pcss'

const Search = () => {

    return <div className={CM.search}>
        <h1 className={CM.searchTitle}>Find your movie</h1>
        <div className={CM.form}>
            <input type="text" placeholder="What do you want to watch?" className={CM.formInput}/>
            <button className={CM.formButton} type="button">Search</button>
        </div>
    </div>
}

export default Search