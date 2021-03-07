import React from 'react'
import PropTypes from 'prop-types'

import Search from './Search'
import Button from '../Button'

import CM from './styles.pcss'
import headerLogo from '../images/logo.png'

const Header = ({
    onAddNewMovie = Function.prototype
}) => {

    return <div className={CM.header}>
        <a href="#" className={CM.logo}>
            <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
        </a>
        <Button
            kind="aux"
            className={CM.buttonAddMovie}
            onClick={onAddNewMovie}>
            + Add Movie
        </Button>
        <Search/>
    </div>
}

Header.propTypes = {
    onAddNewMovie: PropTypes.func,
};

export default Header