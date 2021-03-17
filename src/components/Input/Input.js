import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Input = ({
    className = '',
    kind = '',
    type = 'text',
    value = '',
    placeholder = '',
    children,
    onClick = Function.prototype
}) => {
    const [inputValue, setinputValue] = useState(value)

    function handleInputChange(event) {
        setinputValue(event.target.value)
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onClick();
        }
    }

    return <input
        className={`${className} ${CM.input} ${CM["kind-" + kind] || ''}`}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}>
            {children}
        </input>
}

Input.propTypes = {
    className: PropTypes.string,
    kind: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

export default Input