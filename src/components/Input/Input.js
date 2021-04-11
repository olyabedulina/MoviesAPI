import React from 'react'
// import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Input = ({
    className = '',
    kind = '',
    type = 'text',
    value = '',
    placeholder = '',
    children,
    onChange = Function.prototype
}) => {

    function handleInputChange(event) {
        onChange(event)
    }

    return <input
        className={`${className} ${CM.input} ${CM["kind-" + kind] || ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}>
            {children}
        </input>
}

// Input.propTypes = {
//     className: PropTypes.string,
//     kind: PropTypes.string,
//     type: PropTypes.string,
//     value: PropTypes.node.isRequired,
//     placeholder: PropTypes.string,
//     children: PropTypes.node,
//     onClick: PropTypes.func
// };

export default Input
