import React from 'react'
import { Link } from 'react-router-dom'

import Button from "./Button";
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'

import CM from './styles.pcss'

import pageNotFoundImg from "./images/404-not-found.png";
import pageNotFoundLogo from "./images/logo.png";

const NotFoundPage = () => {

    return <>
        <ErrorBoundary>
            <div id="app" className="app">
                <div className={CM.pageNotFound}>
                    <a href="#" className={CM.pageNotFoundLogo}>
                        <img className={CM.pageNotFoundLogoImage} src={pageNotFoundLogo} alt="Netflix roulette"/>
                    </a>
                    <h1 className={CM.pageNotFoundTitle}>Page not found</h1>
                    <img className={CM.pageNotFoundImage} src={pageNotFoundImg} alt="Page Not Found"/>
                    <Link to="/">
                        <Button
                            kind='alt'
                            className={CM.pageNotFoundButton}>
                            Go Back To Home
                        </Button>
                    </Link>
                </div>
                <Footer/>
            </div>
        </ErrorBoundary>
    </>
}

export default NotFoundPage
