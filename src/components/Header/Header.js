import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Search from './Search'
import Button from '../Button'

import Modal from '../Modal'
import AddMovie from '../Modal/AddMovie'

import CM from './styles.pcss'
import headerLogo from '../images/logo.png'

const Header = () => {
    const [openModal, setOpenModal] = useState(false)

    function handleClick() {
        setOpenModal(true)
    }

    function handleModalClose() {
        setOpenModal(false)
    }

    return <div className={CM.header}>
        <a href="#" className={CM.logo}>
            <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
        </a>
        <Button
            kind="aux"
            className={CM.buttonAddMovie}
            onClick={handleClick}>
            + Add Movie
        </Button>
        <Search/>

        { openModal ? <Modal onModalClose={handleModalClose}>
                <AddMovie />
            </Modal> : ''
        }
    </div>
}

Header.propTypes = {
    genres: PropTypes.array,
};

export default Header
