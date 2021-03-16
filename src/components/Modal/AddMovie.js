import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import MultiSelect from '../MultiSelect'
import Button from '../Button'

import CM from './styles.pcss'
import EditMovie from "./EditMovie";

const AddMovie = ({
    children,
    genres,
    selectedGenresArray = []
}) => {

    const [selectedGenres, setSelectedGenres] = useState(selectedGenresArray)

    function handleSelectedGenresChange(nextSelectedGenres) {
        setSelectedGenres(nextSelectedGenres)
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
                        value=''
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
                        value=''
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
                        value=''
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
                        value=''
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
                        value=''
                    />
                </label>
            </div>
        </li>
        <li className={CM.modalFooter}>
            <Button
                kind='alt'
                className={CM.modalFooterButton}>
                Reset
            </Button>
            <Button
                kind='main'
                className={CM.modalFooterButton}>
                Submit
            </Button>
        </li>
    </>
}

AddMovie.propTypes = {
    selectedGenresArray: PropTypes.shape({
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
    }),
    genres: PropTypes.array,
    children: PropTypes.node
};

export default AddMovie