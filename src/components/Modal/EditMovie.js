import React, { useState} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.pcss'

import { useDispatch } from "react-redux"
import { editMovie } from '../../redux/actions'

const EditMovie = ({
    children,
    item,
    genres,
    onModalClose = Function.prototype
}) => {

    const [selectedGenres, setSelectedGenres] = useState(genres.filter( ({ name }) => (item.genres.includes(name)) ).map(({ id }) => id) )
    const [movieTitleValue, setMovieTitleValue] = useState(item.title)
    const [movieDateValue, setMovieDateValue] = useState(item.release_date)
    const [movieUrlValue, setMovieUrlValue] = useState(item.poster_path)
    const [movieOverviewValue, setMovieOverviewValue] = useState(item.overview)
    const [movieRuntimeValue, setMovieRuntimeValue] = useState(item.runtime)

    const dispatch = useDispatch()

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)
    }

    function handleCloseButtonClick() {
        onModalClose();
    }

    function handleSubmitClick() {
        const updatedMovie = {
            id: item.id,
            title: movieTitleValue,
            release_date: movieDateValue,
            poster_path: movieUrlValue,
            overview: movieOverviewValue,
            runtime: parseInt(movieRuntimeValue),
            genres: genres.filter(({ id }) => (selectedGenres.includes(id))).map(({ name }) => name)
        }

        dispatch(editMovie(updatedMovie))
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
                    <span className={CM.fieldLabelText}>Genre</span>
                    {/*{console.log("selectedGenres = ", selectedGenres)}*/}
                    {/*{console.log("film genres = ", item.genres)}*/}
                    {/*{console.log("all genres = ", genres)}*/}
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
                onClick={handleSubmitClick}
                className={CM.modalFooterButton}>
                Submit
            </Button>
        </li>
    </>
}

EditMovie.propTypes = {
    children: PropTypes.node,
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

export default EditMovie
