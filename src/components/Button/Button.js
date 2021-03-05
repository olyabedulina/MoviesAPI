import React from 'react'

import CM from './styles.pcss'

const Button = ({ className = '', kind = 'main', children, onClick }) => {
    function handleClick() {
        onClick()
    }

    return <button
        className={`${className} ${CM.button} ${CM["kind-" + kind]}`}
        type="button"
        onClick={handleClick}>
            {children}
        </button>
}

export default Button