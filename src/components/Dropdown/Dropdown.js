import React, { useState } from 'react'

import CM from './styles.pcss'

const Dropdown = ({
    className = '',
    placeholder,

}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    // const [selectedData, setSelectedData] = React.useState([]);

    function handleDropdownClick() {
        setIsOpen(!isOpen)
    }

    return <div className={`${CM[className] || ''} ${CM.dropdown}`}>
        <div
            className={CM.dropdownInput}
            onClick={handleDropdownClick}>
            <div className={CM.dropdownInputPlaceholder}>
                Select Genre
            </div>
            {/*<ul className={CM.dropdownInputSelectedDataList}>*/}
                {/*<li className={CM.dropdownInputSelectedDataListItem}>Temp data</li>*/}
                {/*<li className={CM.dropdownInputSelectedDataListItem}>Temp data</li>*/}
                {/*<li className={CM.dropdownInputSelectedDataListItem}>Temp data</li>*/}
            {/*</ul>*/}
            <div className={`${CM.dropdownInputButton} ${CM.dropdownInputButtonUp}`}></div>
        </div>
        {
            (isOpen > 0) ? <ul className={CM.dropdownList}>
                <li className={CM.dropdownListItem}>Temp data</li>
                <li className={CM.dropdownListItem}>Temp data</li>
                <li className={CM.dropdownListItem}>Temp data</li>
            </ul> : ''
        }
    </div>
}

export default Dropdown