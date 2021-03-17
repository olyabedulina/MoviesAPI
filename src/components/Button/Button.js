import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Button = ({
    className = '',
    kind = 'main',
    children,
    onClick = Function.prototype
}) => {
    function handleClick() {
        onClick();
    }

    return <button
        className={`${className} ${CM.button} ${CM["kind-" + kind] || ''}`}
        type="button"
        onClick={handleClick}>
            {children}
        </button>
}

Button.propTypes = {
    className: PropTypes.string,
    kind: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Button