import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.pcss'
import { addMovie } from '../../redux/actions'

const AddMovie = ({
    children,
    genres,
    selectedGenresArray = [],
    onModalClose = Function.prototype
}) => {

    const [selectedGenres, setSelectedGenres] = useState(selectedGenresArray)
    const [movieTitleValue, setMovieTitleValue] = useState('')
    const [movieDateValue, setMovieDateValue] = useState('')
    const [movieUrlValue, setMovieUrlValue] = useState('')
    const [movieOverviewValue, setMovieOverviewValue] = useState('')
    const [movieRuntimeValue, setMovieRuntimeValue] = useState('')

    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)
    }

    function handleCloseButtonClick() {
        onModalClose();
    }

    function handleSubmitClick() {
        const newMovie = {
            title: movieTitleValue,
            release_date: movieDateValue,
            poster_path: movieUrlValue,
            overview: movieOverviewValue,
            runtime: parseInt(movieRuntimeValue),
            genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        }

        dispatch(addMovie(newMovie))
        onModalClose()
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
                    <span className={CM.fieldLabelText}>Genre</span>
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
                className={CM.modalFooterButton}
                onClick={handleSubmitClick}>
                Submit
            </Button>
        </li>
    </>
}

AddMovie.propTypes = {
    children: PropTypes.node,
    selectedGenresArray: PropTypes.array,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            isSelected: PropTypes.bool,
            isIncludedInFilter: PropTypes.bool
        })
    ),
    onModalClose: PropTypes.func
};

export default AddMovie
