import React, { useState, useEffect } from "react";
import Item from "./Item";
import '../styles/grid.scss'

const handleMovies = (setMovies, search, bar) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  }

  const temp = "http://localhost:5000/"
  const fetching = search === "none" ? temp.concat("","getMovies") : search === "title" ? temp.concat("findmovie/", bar) : temp.concat("findgenre/", bar)

  fetch(fetching,requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setMovies(result)
    })
    .then(console.log(fetching))
}

const MovieGrid = ({
  movies,
  setMovies,
  search,
  bar,
}) => {

  useEffect(() => {
    handleMovies(setMovies,search,bar)
  }, [bar])

  return (
    <div className="main-content-grid">
      <h3>Movies</h3>
      <div className="main-grid">
        { 
          movies.length > 0 
          && movies.map(movie => ( 
            <Item 
              gridMovie={movie}
              key={movie._id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MovieGrid