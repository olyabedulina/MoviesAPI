import React, { useState } from 'react'

import Button from '../Button'
import Input from '../Input'

import CM from './styles.pcss'

import { Link, useParams } from "react-router-dom";

const Search = () => {
    let { searchQuery } = useParams();

    const [searchInputValue, setSearchInputValue] = useState(searchQuery || '');

    function handleInputChange(event) {
        setSearchInputValue(event.target.value)
    }

    return <div className={CM.search}>
        <h1 className={CM.searchTitle}>Find your movie</h1>
        <form className={CM.form}>
            <Input
                className={CM.formInput}
                placeholder="What do you want to watch?"
                type="text"
                value={searchInputValue}
                onChange={handleInputChange}
            />
            <Link to={`/search/${searchInputValue}`}>
                <Button
                    type="submit"
                    className={CM.formButton}>
                    Search
                </Button>
            </Link>
        </form>
    </div>
}

export default Search
