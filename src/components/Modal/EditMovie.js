import React, { useState} from 'react'
// import PropTypes from 'prop-types'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.pcss'

import { useDispatch } from "react-redux";
import { editMovie } from '../../redux/actions'
import {nanoid} from "nanoid";

const EditMovie = ({
    children,
    item,
    genres,
    onModalClose = Function.prototype
}) => {

    const [selectedGenres, setSelectedGenres] = useState(item.genre.map(({id}) => id))
    const [movieTitleValue, setMovieTitleValue] = useState(item.title)
    const [movieDateValue, setMovieDateValue] = useState(`${item.releaseDate}-01-01`)
    const [movieUrlValue, setMovieUrlValue] = useState(item.url)
    const [movieOverviewValue, setMovieOverviewValue] = useState(item.description)
    const [movieRuntimeValue, setMovieRuntimeValue] = useState(item.movieDuration.timing)

    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)
    }

    function handleCloseButtonClick() {
        onModalClose();
    }

    function handleSubmitClick() {
        const newMovie = {
            id: item.id,
            src: item.src,
            title: movieTitleValue,
            releaseDate: movieDateValue,
            genre: selectedGenres,
            rating: item.rating,
            movieDuration: {
                timing: movieRuntimeValue,
                units: item.movieDuration.units
            },
            url: movieUrlValue,
            description: movieOverviewValue
        }

        dispatch(editMovie(newMovie))
    }

    function handleMovieTitleChange(event) {
        setMovieTitleValue(event.target.value)
    }

    function handleMovieDateChange(event) {
        setMovieDateValue(event.target.value)
    }

    function handleMovieUrlChange(event) {
        setMovieUrlValue(event.target.value)
    }

    function handleMovieOverviewChange(event) {
        setMovieOverviewValue(event.target.value)
    }

    function handleMovieRuntimeChange(event) {
        setMovieRuntimeValue(event.target.value)
    }

    return <>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Movie ID</span>
                    <span>{item.id}</span>
                </label>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Title</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder='Title here'
                        type='text'
                        value={movieTitleValue}
                        onChange={handleMovieTitleChange}
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Release Date</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder='Select Date'
                        type='date'
                        value={movieDateValue}
                        onChange={handleMovieDateChange}
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Movie URL</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder='Movie URL here'
                        type='text'
                        value={movieUrlValue}
                        onChange={handleMovieUrlChange}
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <div className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Movie URL</span>
                    <MultiSelect
                        placeholder="Select genre"
                        items={genres}
                        selectedItems={selectedGenres}
                        onChange={handleSelectedGenresChange}
                    />
                </div>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Overview</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder='Overview here'
                        type='text'
                        value={movieOverviewValue}
                        onChange={handleMovieOverviewChange}
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalContainerItem}>
            <div className={CM.field}>
                <label className={CM.fieldLabel}>
                    <span className={CM.fieldLabelText}>Runtime</span>
                    <Input
                        className={CM.fieldInput}
                        placeholder='Runtime here'
                        type='text'
                        // value={`${item.movieDuration.timing} ${item.movieDuration.units}`}
                        value={movieRuntimeValue}
                        onChange={handleMovieRuntimeChange}
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalFooter}>
            <Button
                kind='alt'
                className={CM.modalFooterButton}
                onClick={handleCloseButtonClick}>
                Reset
            </Button>
            <Button
                kind='main'
                onClick={handleSubmitClick}
                className={CM.modalFooterButton}>
                Submit
            </Button>
        </li>
    </>
}

// EditMovie.propTypes = {
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
//     }),
//     genres: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string,
//             name: PropTypes.string,
//             isSelected: PropTypes.bool,
//             isIncludedInFilter: PropTypes.bool
//         })
//     ),
//     children: PropTypes.node
// };

export default EditMovie
