import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'

const MultiSelect = ({
  placeholder,
  items,
  selectedItems,
  onChange
}) => {

    function handleItemChange(checked, itemValue) {
        const nextSelectedItems = checked ?
            selectedItems.concat(itemValue) :
            selectedItems.filter((value) => (value !== itemValue))

        onChange(nextSelectedItems)
    }

    const selectedItemTitles = selectedItems.map(
        (selectedItemValue) => items.find(
            ({ value }) => (value === selectedItemValue)
        ).title
    )

  return <Dropdown placeholder={`${selectedItemTitles.length ? selectedItemTitles.join(', ') : placeholder}`}>
      {
        items.map(({ value, title }) => <div key={value} className={CM.item}>
          <Checkbox
            checked={selectedItems.includes(value)}
            data={value}
            onChange={handleItemChange}
          >{title}</Checkbox>
        </div>)
      }
  </Dropdown>
}

MultiSelect.propTypes = {
    placeholder: PropTypes.string,
    items: PropTypes.array,
    selectedItems: PropTypes.array,
    onChange: PropTypes.func
};

export default MultiSelect
