import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultiSelect from '../MultiSelect'

import CM from './styles.pcss'

const Field = ({
    className = '',
    label = 'Label',
    placeholder = 'Text here',
    type = 'text',
    kind = 'input',
    text = '',
    value,
    genres,
    selectedGenresArray = []
}) => {

    const [selectedGenres, setSelectedGenres] = useState(selectedGenresArray)

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)
    }

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
                <span className={CM.fieldLabelText}>{label}</span>
                <MultiSelect
                    placeholder="Select genre"
                    items={genres}
                    selectedItems={selectedGenres}
                    onChange={handleSelectedGenresChange}
                />
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
    value: PropTypes.string,
    selectedGenresArray: PropTypes.array
};

export default Field