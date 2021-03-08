import React from 'react'
import PropTypes from 'prop-types'

import Field from '../Field'
import Button from '../Button'

import CM from './styles.pcss'

const Modal = ({
    fieldsList,
    onModalClose = Function.prototype
}) => {

    function handleCloseButtonClick(event) {
        event.preventDefault();
        onModalClose();
    }

    return <>
        <div className={CM.modalOverlay}></div>
        <div className={CM.modal}>
            <div className={CM.modalTitle}>{fieldsList.title}</div>

            {
                (fieldsList.fields.length > 0) ? <ul className={CM.modalContainer}>
                    {
                        fieldsList.fields.map((field, index) => <li key={index} className={CM.modalContainerItem}>
                                <Field
                                    label={field.label}
                                    kind={field.kind}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    text={field.text}
                                />
                            </li>
                        )
                    }
                </ul> : 'There are no items.'
            }
            <a href="#" className={CM.modalClose} onClick={handleCloseButtonClick}>&#10005;</a>
            {
                (fieldsList.buttons.length > 0) ? <div className={CM.modalFooter}>
                        {
                            fieldsList.buttons.map((button, index) => <Button
                                kind={button.kind}
                                className={CM.modalFooterButton}>
                                    {button.text}
                                </Button>
                            )
                        }
                    </div> : 'There are no buttons.'
            }
        </div>
    </>
}

Modal.propTypes = {
    fieldsList: PropTypes.shape({
        title: PropTypes.string,
        fields: PropTypes.array
    }),
    onModalClose: PropTypes.func
};

export default Modal