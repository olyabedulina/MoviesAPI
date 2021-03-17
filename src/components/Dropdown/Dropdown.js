import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Dropdown = ({
    className = '',
    placeholder,
    children
}) => {
    const [opened, setOpened] = useState(false)

    function handleTriggerClick() {
        setOpened(!opened)
    }

    return <div className={`${className} ${CM.dropdown} ${opened ? CM.opened : ''}`}>
        <div className={CM.dropdownInput}>
            <div className={CM.dropdownPlaceholder}>{placeholder}</div>
            <div
                className={`${CM.dropdownInputButton} ${opened ? CM.dropdownInputButtonDown : CM.dropdownInputButtonUp}`}
                onClick={handleTriggerClick} />
        </div>
        {opened && <div className={CM.dropdownList}>{children}</div>}

    </div>
}

Dropdown.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.array
};

export default Dropdown