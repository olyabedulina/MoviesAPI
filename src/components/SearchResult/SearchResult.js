import React from 'react'

import SearchResultList from './SearchResultList'

import CM from './styles.pcss'

let searchResultItems = [
    {
        id: '1111',
        src: './images/movies/movie-1.png',
        title: 'Avengers: War of Infinity',
        releaseDate: 2004,
        genre: 'Action and Adventure'
    },
    {
        id: '2222',
        src: './images/movies/movie-2.png',
        title: 'Inception',
        releaseDate: 2003,
        genre: 'Action and Adventure'
    },
    {
        id: '3333',
        src: './images/movies/movie-3.png',
        title: 'Reservoir Dogs',
        releaseDate: 1994,
        genre: 'Oscar Winning Movie'
    },
    {
        id: '4444',
        src: './images/movies/movie-4.png',
        title: 'Pulp Fiction',
        releaseDate: 2004,
        genre: 'Action and Adventure'
    },
    {
        id: '5555',
        src: './images/movies/movie-5.png',
        title: 'Bill: Vol 2',
        releaseDate: 1994,
        genre: 'Oscar winning Movie'
    },
    {
        id: '6666',
        src: './images/movies/movie-6.png',
        title: 'Bohemian Rhapsody',
        releaseDate: 2018,
        genre: 'Drama, Biography, Music'
    },
];

const SearchResult = () => {

    return <div className={CM.search_result}>
        <div className={CM.search_count}>
            <strong className={CM.search_count_hightlight}>6</strong> movies found
        </div>
        <SearchResultList
            items={searchResultItems}
        />
    </div>
}

export default SearchResult