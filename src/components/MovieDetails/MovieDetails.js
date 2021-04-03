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
            {/*{ console.log("movie = ", movie) }*/}
            <div className={CM.movieImage}>
                <img
                    className={CM.movieImageImg}
                    src={movie.poster_path}
                    alt={movie.title}
                />
            </div>
            <div className={CM.movieData}>
                <div className={CM.movieName}>{movie.title}</div>
                { movie.vote_average ? <div className={CM.movieRating}>{movie.vote_average}</div> : '' }
                <div className={CM.movieGenre}>{movie.genres.map((name) => name).join(', ')}</div>
                <div className={CM.movieReleaseYear}>{movie.release_date}</div>
                <div className={CM.movieDuration}>{`${movie.runtime} min`}</div>
                <div className={CM.movieDescription}>{movie.overview}</div>
            </div>
        </div>
    </div>
}

MovieDetails.propTypes = {
    movie: PropTypes.shape({
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
    }).isRequired,
    onMagnifierClick: PropTypes.func
};

export default MovieDetails
