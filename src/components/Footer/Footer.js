import React from 'react'

import CM from './styles.pcss'
import footerLogo from '../images/logo.png'

const Footer = () => {

    return <div className={CM.footer}>
        <a href="#" className={CM.logo}>
            <img className={CM.logoImage} src={footerLogo} alt="Netflix roulette"/>
        </a>
    </div>
}

export default Footer