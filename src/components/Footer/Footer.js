import React from 'react'
import { Link } from 'react-router-dom'

import CM from './styles.pcss'
import footerLogo from '../images/logo.png'

const Footer = () => {

    return <div className={CM.footer}>
        <Link to="/" className={CM.logo}>
            <img className={CM.logoImage} src={footerLogo} alt="Netflix roulette"/>
        </Link>
    </div>
}

export default Footer
