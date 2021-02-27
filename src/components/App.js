import React from 'react'

// import CM from './styles.pcss'

const App = () => {

  return <div>
    <div className="main">
      <div className="header">
        <a href="#" className="logo">
          <img className="logo-image" src="./src/components/images/logo.png" alt="Netflix roulette" />
        </a>
        <a href="#" className="button button--add-movie">
          + Add Movie
        </a>
        <div className="search">
          <h1 className="search-title">Find your movie</h1>
          <div className="form">
            <input type="text" placeholder="What do you want to watch?" className="form-input" />
            <button className="form-button" type="button">Search</button>
          </div>
        </div>
      </div>
      <div className="nav">
        <ul className="menu">
          <li className="menu-item selected">
            <a href="#" className="menu-link">All</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Documentary</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Comedy</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Horror</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Crime</a>
          </li>
        </ul>
        <div className="sort">
          <h2 className="sort-label">Sort by</h2>
          <div className="sort-criterion sort-up">Release date</div>
        </div>
      </div>
      <div className="container">
        <div className="search-result">
          <strong className="search-result-hightlight">6</strong> movies found
        </div>
        <ul className="movies-list">
          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-1.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Avengers: War of Infinity</div>
              <div className="movie-date">2004</div>
              <div className="movie-genre">Action and Adventure</div>
            </div>
          </li>

          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-2.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Inception</div>
              <div className="movie-date">2003</div>
              <div className="movie-genre">Action and Adventure</div>
            </div>
          </li>

          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-3.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Reservoir Dogs</div>
              <div className="movie-date">1994</div>
              <div className="movie-genre">Oscar Winning Movie</div>
            </div>
          </li>

          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-4.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Pulp Fiction</div>
              <div className="movie-date">2004</div>
              <div className="movie-genre">Action and Adventure</div>
            </div>
          </li>

          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-5.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Bill: Vol 2</div>
              <div className="movie-date">1994</div>
              <div className="movie-genre">Oscar winning Movie</div>
            </div>
          </li>

          <li className="movie">
            <div className="movie-image">
              <img className="movie-image__img" src="./src/components/images/movies/movie-6.png" alt="Movie 1" />
            </div>
            <div className="movie-footer">
              <div className="movie-name">Bohemian Rhapsody</div>
              <div className="movie-date">2013</div>
              <div className="movie-genre">Drama, Biography, Music</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        <a href="#" className="logo">
          <img className="logo-image" src="./src/components/images/logo.png" alt="Netflix roulette" />
        </a>
      </div>
    </div>
  </div>
}

export default App
