import React from 'react'

import CM from './styles.pcss'

const Search = () => {

    return <div className={CM.search_el}>
        <h1 className={CM.search__title}>Find your movie</h1>
        <div className={CM.form_el}>
            <input type="text" placeholder="What do you want to watch?" className={CM.form__input}/>
            <button className={CM.form__button} type="button">Search</button>
        </div>
    </div>
}

export default Search