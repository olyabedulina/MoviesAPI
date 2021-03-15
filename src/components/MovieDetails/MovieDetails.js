import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.pcss'
import headerLogo from "../images/logo.png";

const MovieDetails = ({
    movie,
    onMagnifierClick = Function.prototype
}) => {

    function handleMagnifierClick() {
        onMagnifierClick()
    }

    return <div className={CM.movieDetails}>
        <div className={CM.movieDetailsHeader}>
            <a href="#" className={CM.movieDetailsLogo}>
                <img className={CM.logoImage} src={headerLogo} alt="Netflix roulette"/>
            </a>
            <div
                className={CM.movieDetailsMagnifier}
                onClick={handleMagnifierClick}
            ></div>
        </div>
        <div className={CM.movieDetailsContainer}>
            <div className={CM.movieImage}>
                <img
                    className={CM.movieImageImg}
                    src={movie.src}
                    alt={movie.title}
                />
            </div>
            <div className={CM.movieData}>
                <div className={CM.movieName}>{movie.title}</div>
                <div className={CM.movieRating}>{movie.rating}</div>
                <div className={CM.movieGenre}>{movie.genre.map(({ name }) => name).join(', ')}</div>
                <div className={CM.movieReleaseYear}>{movie.releaseDate}</div>
                <div className={CM.movieDuration}>{movie.movieDuration.timing} {movie.movieDuration.units}</div>
                <div className={CM.movieDescription}>{movie.description}</div>
            </div>
        </div>
    </div>
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
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
}).isRequired,
    onMagnifierClick: PropTypes.func
};

export default MovieDetails