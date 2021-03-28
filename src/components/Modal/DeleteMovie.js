import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import Button from '../Button'

import { useDispatch } from 'react-redux'
import { deleteMovie } from '../../redux/actions'

import CM from './styles.pcss'

const DeleteMovie = ({
    item
}) => {

    const dispatch = useDispatch()

    function handleConfirmClick() {
        dispatch(deleteMovie(item.id))
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

// DeleteMovie.propTypes = {
//     item: PropTypes.shape({
//         id: PropTypes.string,
//         src: PropTypes.string,
//         title: PropTypes.string,
//         releaseDate: PropTypes.string,
//         genre: PropTypes.arrayOf(
//             PropTypes.shape({
//                 id: PropTypes.string,
//                 name: PropTypes.string,
//             })
//         ),
//         rating: PropTypes.string,
//         movieDuration: PropTypes.shape({
//             timing: PropTypes.number,
//             units: PropTypes.string
//         }),
//         url: PropTypes.string,
//         description: PropTypes.string
//     })
// };

export default DeleteMovie
