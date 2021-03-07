import React from 'react'

import Button from '../Button'
import Input from '../Input'

import CM from './styles.pcss'

const Search = () => {

    return <div className={CM.search}>
        <h1 className={CM.searchTitle}>Find your movie</h1>
        <div className={CM.form}>
            <Input
                className={CM.formInput}
                placeholder="What do you want to watch?"
                type="text"
                value=""
            />
            <Button className={CM.formButton}>
                Search
            </Button>
        </div>
    </div>
}

export default Search