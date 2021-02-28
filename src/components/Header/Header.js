import React from 'react'

import Search from './Search'

import CM from './styles.pcss'
import headerLogo from '../images/logo.png'

const Header = () => {

    return <div className={CM.header}>
        <a href="#" className={CM.logo}>
            <img className={CM.logo__image} src={headerLogo} alt="Netflix roulette"/>
        </a>
        <a href="#" className={CM.button_add_movie}>
            + Add Movie
        </a>
        <Search/>
    </div>
}

export default Header