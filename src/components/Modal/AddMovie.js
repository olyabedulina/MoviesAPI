import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.pcss'
import { addMovie } from '../../redux/actions'

import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    }

    if (!values.movieURL) {
        errors.movieURL = 'Movie URL is required';
    } else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i.test(values.movieURL)) {
        errors.movieURL = 'Invalid url';
    }

    if (!values.overview) {
        errors.overview = 'Overview is required';
    }

    if (!values.selectDate) {
        errors.selectDate = 'Release date is required';
    }

    if (!values.runtime) {
        errors.runtime = 'Runtime is required';
    } else if (isNaN(values.runtime)) {
        errors.runtime = 'Runtime must be a number';
    } else if (!isNaN(values.runtime) && (values.runtime < 0) ) {
        errors.runtime = 'Runtime must be more than 0';
    }

    return errors;
};

const AddMovie = ({
    children,
    genres,
    selectedGenresArray = [],
    onModalClose = Function.prototype
}) => {

    const [selectedGenres, setSelectedGenres] = useState(selectedGenresArray)
    const [selectedGenresError, setSelectedGenresError] = useState(false)
    const [movieTitleValue, setMovieTitleValue] = useState('')
    const [movieDateValue, setMovieDateValue] = useState('')
    const [movieUrlValue, setMovieUrlValue] = useState('')
    const [movieOverviewValue, setMovieOverviewValue] = useState('')
    const [movieRuntimeValue, setMovieRuntimeValue] = useState('')

    const [movieIsSaved, setMovieIsSaved] = useState(false)

    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)

        if (nextSelectedGenres.length > 0) {
            setSelectedGenresError(false)
        }
    }

    function handleCloseButtonClick() {
        onModalClose();
    }

    function handleSubmitClick() {
        // const newMovie = {
        //     title: movieTitleValue,
        //     release_date: movieDateValue,
        //     poster_path: movieUrlValue,
        //     overview: movieOverviewValue,
        //     runtime: parseInt(movieRuntimeValue),
        //     genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        // }

        if (selectedGenres.length === 0) {
            setSelectedGenresError(true)
            return
        }

        const newMovie = {
            title: formik.values.title,
            release_date: formik.values.selectDate,
            poster_path: formik.values.movieURL,
            overview: formik.values.overview,
            runtime: parseInt(formik.values.runtime),
            genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        }

        console.log("newMovie = ", newMovie)

        dispatch(addMovie(newMovie))
        // onModalClose()
        setMovieIsSaved(true)
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

    const formik = useFormik({
        initialValues: {
            title: '',
            selectDate: '',
            movieURL: '',
            overview: '',
            runtime: ''
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            handleSubmitClick()
        },
    });

    return (!movieIsSaved) ? <form onSubmit={formik.handleSubmit}>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <label className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Title</span>
                            <Input
                                id='title'
                                name='title'
                                className={CM.fieldInput}
                                placeholder='Title here'
                                type='text'
                                // value={movieTitleValue}
                                // onChange={handleMovieTitleChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div className={CM.fieldError}>{formik.errors.title}</div>
                            ) : null}
                        </label>
                    </div>
                </div>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <label className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Release Date</span>
                            <Input
                                id='selectDate'
                                name='selectDate'
                                className={CM.fieldInput}
                                placeholder='Select Date'
                                type='date'
                                // value={movieDateValue}
                                // onChange={handleMovieDateChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.selectDate}
                            />
                            {formik.touched.selectDate && formik.errors.selectDate ? (
                                <div className={CM.fieldError}>{formik.errors.selectDate}</div>
                            ) : null}
                        </label>
                    </div>
                </div>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <label className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Movie URL</span>
                            <Input
                                id='movieURL'
                                name='movieURL'
                                className={CM.fieldInput}
                                placeholder='Movie URL here'
                                type='text'
                                // value={movieUrlValue}
                                // onChange={handleMovieUrlChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.movieURL}
                            />
                            {formik.touched.movieURL && formik.errors.movieURL ? (
                                <div className={CM.fieldError}>{formik.errors.movieURL}</div>
                            ) : null}
                        </label>
                    </div>
                </div>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <div className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Genre</span>
                            <MultiSelect
                                placeholder="Select genre"
                                items={genres}
                                selectedItems={selectedGenres}
                                onChange={handleSelectedGenresChange}
                            />
                            {selectedGenresError ? (
                                <div className={CM.fieldError}>Select at least one genre to proceed</div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <label className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Overview</span>
                            <Input
                                id='overview'
                                name='overview'
                                className={CM.fieldInput}
                                placeholder='Overview here'
                                type='text'
                                // value={movieOverviewValue}
                                // onChange={handleMovieOverviewChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.overview}
                            />
                            {formik.touched.overview && formik.errors.overview ? (
                                <div className={CM.fieldError}>{formik.errors.overview}</div>
                            ) : null}
                        </label>
                    </div>
                </div>
                <div className={CM.modalContainerItem}>
                    <div className={CM.field}>
                        <label className={CM.fieldLabel}>
                            <span className={CM.fieldLabelText}>Runtime</span>
                            <Input
                                id='runtime'
                                name='runtime'
                                className={CM.fieldInput}
                                placeholder='Runtime here'
                                type='text'
                                // value={movieRuntimeValue}
                                // onChange={handleMovieRuntimeChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.runtime}
                            />
                            {formik.touched.runtime && formik.errors.runtime ? (
                                <div className={CM.fieldError}>{formik.errors.runtime}</div>
                            ) : null}
                        </label>
                    </div>
                </div>
                <div className={CM.modalFooter}>
                    <Button
                        kind='alt'
                        className={CM.modalFooterButton}
                        onClick={handleCloseButtonClick}>
                        Reset
                    </Button>
                    <Button
                        type='submit'
                        kind='main'
                        className={CM.modalFooterButton}
                        // onClick={handleSubmitClick}
                    >
                        Submit
                    </Button>
                </div>
            </form> : <div className={CM.modalCongratulations}>
                        <h2 className={CM.modalCongratulationsTitle}>Congratulations!</h2>
                        <div className={CM.modalCongratulationsText}>The movie has been added to database successfully.</div>
                      </div>
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
