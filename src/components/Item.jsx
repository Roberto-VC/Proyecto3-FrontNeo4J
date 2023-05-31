import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "../contexts/movieProvider";

const Item = ({ gridMovie }) => {
  const navigate = useNavigate()
  const { setMovie } = useContext(MovieContext)

  return (
    <div className="item">
      <img
        src={'http://localhost:5000/getCover/' + gridMovie.cover}
        alt={gridMovie.title}
        onClick={() => {
          setMovie(gridMovie)
          navigate('/Movie')
        }}
      />
      <h3>{gridMovie.title}</h3>
    </div>
  )
}

export default Item