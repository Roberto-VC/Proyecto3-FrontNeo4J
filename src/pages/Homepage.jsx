import React, { useState, useEffect, useContext } from "react";

import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";
import '../styles/Homepage.scss'

const HomePage = ( ) => {
  const user = localStorage.getItem('username')
  const [movies, setMovies] = useState([])
  const [data, setData] = useState("none");
  const [info, setInfo] = useState("");
  

  const mainContent = (user === null) ? (
    <>
      <Header />
      <div className="hero">
        <div className="main-content">
          <h1>Welcome</h1>
          <h3><strong>Login</strong> or <strong>Sign-in</strong> to <em>Continue</em> </h3>
        </div>
      </div>
    </>
  ) : (
    <><Header changeinfo={info => setInfo(info)} changedata={data => setData(data)}/>
    {(() => {
        if (data==="none" || info === "") {
          return (
            <MovieGrid
            movies={movies}
            setMovies={setMovies}
            search={data}
            bar={info}
            />
          )
        } else if (data === "title" && info !== "") {
          return (
            <MovieGrid
            movies={movies}
            setMovies={setMovies}
            search={data}
            bar={info}
            />
          )
        } else if (data === "genre" && info !== ""){
          return (
            <MovieGrid
            movies={movies}
            setMovies={setMovies}
            search={data}
            bar={info}
            />
          )
        }
      })()}
    </>
  )

  return mainContent
}

export default HomePage