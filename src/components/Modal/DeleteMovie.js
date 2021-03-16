import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import CM from './styles.pcss'
import AddMovie from "./AddMovie";

const DeleteMovie = ({
    item
}) => {

    return <>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <span>Are you sure you want to delete this movie?</span>
            </div>
        </li>
        <li className={CM.modalFooter}>
            <Button
                kind='main'
                className={CM.modalFooterButton}>
                Confirm
            </Button>
        </li>
    </>
}

DeleteMovie.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
        releaseDate: PropTypes.number,
        genre: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
            })
        ),
        rating: PropTypes.string,
        movieDuration: PropTypes.shape({
            timing: PropTypes.number,
            units: PropTypes.string
        }),
        url: PropTypes.string,
        description: PropTypes.string
    })
};

export default DeleteMovie