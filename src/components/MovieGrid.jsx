import React, { useState, useEffect } from "react";
import Item from "./Item";
import '../styles/grid.scss'

const getRequest = (query, bar) => {
  const temp = "http://localhost:8000/"
  if (query === 'none') return temp.concat("","getMovies")
  if (query === 'Actor') return temp.concat("getMoviesActor/", bar)
  if (query === 'genres') return temp.concat("getMoviesGenre/", bar)
  if (query === 'recomendations') return temp.concat("getRecomendations/", localStorage.getItem('username'))
  if (query === 'Director') return temp.concat("getMoviesDirector/", bar)
  if (query === 'premio') return temp.concat("getMoviesPremio/")
}

const handleMovies = (setMovies, search, bar) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  const fetching = getRequest(search, bar)
  console.log(fetching)

  fetch(fetching, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const actual_result = result.map(movie => movie[0])
      console.log('Llegaron licas')
      setMovies(actual_result)
    })
}

const MovieGrid = ({ search, bar }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    handleMovies(setMovies,search,bar)
  }, [search, setMovies])

  return (
    <div className="main-content-grid">
      <h3>Movies</h3>
      <div className="main-grid">
        { 
          movies.length > 0 
          && movies.map(movie => ( 
            <Item 
              gridMovie={movie}
              key={movie.movie_id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MovieGrid