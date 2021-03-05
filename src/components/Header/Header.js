import React from 'react'

import Search from './Search'
import Button from '../Button'

import CM from './styles.pcss'
import headerLogo from '../images/logo.png'

const Header = () => {

    return <div className={CM.header}>
        <a href="#" className={CM.logo}>
            <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
        </a>
        <Button kind="aux" className={CM.buttonAddMovie}>
            + Add Movie
        </Button>
        <Search/>
    </div>
}

export default Header