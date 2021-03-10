import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import Dropdown from '../Dropdown'

import CM from './styles.pcss'

const Field = ({
    className = '',
    label = 'Label',
    placeholder = 'Text here',
    type = 'text',
    kind = 'input',
    text = '',
    value
}) => {

    switch (kind) {
        case 'text':
            return <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>{label}</span>
                    <span>{text}</span>
                </label>
            </div>
        case 'info':
            return <div className={CM.field}>
                    <span>{text}</span>
            </div>
        case 'input':
            return <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>{label}</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                    />
                </label>
            </div>
        case 'select':
            return <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>{label}</span>
                    {/*<span>SELECT WOULD BE HERE</span>*/}
                    <Dropdown
                        className={className}/>
                </label>
            </div>
    }
}

Field.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    kind: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string
};

export default Field