import React from 'react'

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
                <div className={CM.movieGenre}>{movie.genre.map(({ text }) => text).join(', ')}</div>
                <div className={CM.movieReleaseYear}>{movie.releaseDate}</div>
                <div className={CM.movieDuration}>{movie.movieDuration.timing} {movie.movieDuration.units}</div>
                <div className={CM.movieDescription}>{movie.description}</div>
            </div>
        </div>
    </div>
}

export default MovieDetails