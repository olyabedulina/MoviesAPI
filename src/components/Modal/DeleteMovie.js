import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import { useDispatch } from 'react-redux'
import { deleteMovie } from '../../redux/actions'

import CM from './styles.pcss'

const DeleteMovie = ({
    item,
    onModalClose = Function.prototype
}) => {

    const dispatch = useDispatch()

    function handleConfirmClick() {
        dispatch(deleteMovie(item.id))
        onModalClose()
    }

    return <>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <span>Are you sure you want to delete this movie?</span>
            </div>
        </li>
        <li className={CM.modalFooter}>
            <Button
                kind='main'
                onClick={handleConfirmClick}
                className={CM.modalFooterButton}>
                Confirm
            </Button>
        </li>
    </>
}

DeleteMovie.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        tagline: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        runtime: PropTypes.number,
        overview: PropTypes.string
    }),
    onModalClose: PropTypes.func
};

export default DeleteMovie
