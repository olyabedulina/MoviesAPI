import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CM from './styles.pcss'
import headerLogo from "../images/logo.png";

import { getMovie } from "../../redux/actions";
import { getCurrentMovie } from '../../redux/selectors'

const MovieDetails = ({
    movieId = 424785
}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("id = ", movieId)
        dispatch(getMovie(movieId))
    }, [])

    const movie = useSelector(getCurrentMovie)

    function handleMagnifierClick() {
        // onMagnifierClick()
        // navigate to home page
    }

    return movie ? <div className={CM.movieDetails}>
        <div className={CM.movieDetailsHeader}>
            <Link to="/" className={CM.movieDetailsLogo}>
                <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
            </Link>
            <Link to="/">
                <div
                    className={CM.movieDetailsMagnifier}
                    onClick={handleMagnifierClick}
                />
            </Link>
        </div>
        <div className={CM.movieDetailsContainer}>
            { console.log("movie = ", movie) }
            <div className={CM.movieImage} title={movie.title}>
                <img
                    className={CM.movieImageImg}
                    src={movie.poster_path}
                    alt=''
                    title={movie.title}
                />
            </div>
            <div className={CM.movieData}>
                <div className={CM.movieName}>{movie.title}</div>
                { movie.vote_average ? <div className={CM.movieRating}>{movie.vote_average}</div> : '' }
                <div className={CM.movieGenre}>{movie.genres.map((name) => name).join(', ')}</div>
                <div className={CM.movieReleaseYear}>{movie.release_date}</div>
                { movie.runtime ? <div className={CM.movieDuration}>{`${movie.runtime} min`}</div> : '' }
                <div className={CM.movieDescription}>{movie.overview}</div>
            </div>
        </div>
    </div> : ''
}

export default MovieDetails
