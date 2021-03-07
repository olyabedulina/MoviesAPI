import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Input = ({
    className = '',
    kind = '',
    type = 'text',
    value,
    placeholder = '',
    children,
    onClick = Function.prototype,
    onChange = Function.prototype
}) => {

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            onClick();
        }
    }

    function handleInputChange(event) {
        onChange();
    }

    return <input
        className={`${className} ${CM.input} ${CM["kind-" + kind] || ''}`}
        type={type}
        value={value}
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