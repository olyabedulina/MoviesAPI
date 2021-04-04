import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Modal = ({
    children,
    title,
    onModalClose = Function.prototype
}) => {

    function handleCloseButtonClick(event) {
        event.preventDefault();
        onModalClose();
    }

    return <>
        <div className={CM.modalOverlay}></div>
        <div className={CM.modal}>
            <div className={CM.modalTitle}>{title}</div>
            <a href="#" className={CM.modalClose} onClick={handleCloseButtonClick}>&#10005;</a>
            <div className={CM.modalContainer}>
                {children}
            </div>
        </div>
    </>
}

Modal.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onModalClose: PropTypes.func
};

export default Modal
