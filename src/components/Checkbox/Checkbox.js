import React, { useState } from 'react'

import CM from './styles.pcss'

const Checkbox = ({
    className = '',
    kind = '',
    type = 'checkbox',
    name = 'checkbox'
}) => {
    const [checked, setChecked] = React.useState(false);

    function handleCheckboxChange() {
        setChecked(!checked)
    }

    return <>
        <input
            id="checkboxId"
            className={`${className} ${CM.checkbox} ${CM["kind-" + kind] || ''}`}
            type={type}
            name={name}
            defaultChecked={checked}
            onChange={handleCheckboxChange}
        />
        <label
            className={CM.checkboxLabel}
            for="checkboxId">
            Checkbox
        </label>
    </>
}

export default Checkbox