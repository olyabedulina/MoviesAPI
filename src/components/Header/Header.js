import React from 'react'

import Search from './Search'

import CM from './styles.pcss'
import headerLogo from '../images/logo.png'

const Header = () => {

    return <div className={CM.header}>
        <a href="#" className={CM.logo}>
            <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
        </a>
        <a href="#" className={CM.buttonAddMovie}>
            + Add Movie
        </a>
        <Search/>
    </div>
}

export default Header