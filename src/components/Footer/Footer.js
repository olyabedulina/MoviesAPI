import React from 'react'

import CM from './styles.pcss'

const Footer = () => {

    return <div className={CM.footer}>
        <a href="#" className={CM.logo}>
            <img className={CM.logo_image} src="./src/components/images/logo.png" alt="Netflix roulette"/>
        </a>
    </div>
}

export default Footer