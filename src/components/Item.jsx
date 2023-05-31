import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "../contexts/movieProvider";

const Item = ({ gridMovie }) => {
  const navigate = useNavigate()
  const { setMovie } = useContext(MovieContext)

  return (
    <div className="item">
      <img
        src={'https://thumbs.dreamstime.com/b/movie-film-company-logo-design-vector-template-movie-film-company-logo-design-inspiration-vector-template-167661473.jpg'}
        alt={gridMovie.nombre}
        onClick={() => {
          setMovie(gridMovie)
          navigate('/Movie')
        }}
      />
      <h3>{gridMovie.nombre}</h3>
    </div>
  )
}

export default Item