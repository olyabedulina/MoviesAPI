import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'

const Popup = ({
    showPopup,
    onPopupClose = Function.prototype,
    onMovieEdit = Function.prototype,
    onMovieDelete = Function.prototype
}) => {

    function handleEditClick() {
        onMovieEdit();
        onPopupClose();
    }

    function handleDeleteClick() {
        onMovieDelete();
        onPopupClose();
    }

    function handleCloseButtonClick(event) {
        event.preventDefault();
        onPopupClose();
    }

    return showPopup ? <div className={CM.popup}>
        <ul className={CM.popupList}>
            <li className={CM.popupListItem}>
                <a href="#" className={CM.popupLink} onClick={handleEditClick}>Edit</a>
            </li>
            <li className={CM.popupListItem}>
                <a href="#" className={CM.popupLink} onClick={handleDeleteClick}>Delete</a>
            </li>
        </ul>
        <a href="#" className={CM.popupClose} onClick={handleCloseButtonClick}>&#10005;</a>
    </div>  : null
}

Popup.propTypes = {
    showPopup : PropTypes.bool.isRequired,
    onPopupClose : PropTypes.func,
    onMovieEdit : PropTypes.func,
    onMovieDelete : PropTypes.func
};

export default Popup