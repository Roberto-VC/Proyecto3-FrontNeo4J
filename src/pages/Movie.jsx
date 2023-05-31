import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { MovieContext } from "../contexts/movieProvider";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router";
import InfoToken from "../components/InfoToken";
import ReactStars from "react-rating-stars-component";
import Popup from 'reactjs-popup';
import Review from "../components/Review";
import Reviews from "../components/Reviews";

const Movie = () => {
  const movie = useContext(MovieContext)
  const user = localStorage.getItem('username')
  const navigate = useNavigate()


  let genres = movie.genres.reduce(
    (acc, value) => value  + ', ' + acc,
    ''
  )
  genres = genres.substring(0, genres.length - 2)

  const vignete = {background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(128,128,128,0) 100%)'}
  console.log(movie)
  return (
    <>
      <header className="main-nav" style={vignete}>
      <div className="nav-container">
        <img
          src={logo}
          alt="RB-Movies"
          className="logo" 
          onClick={() => navigate('/')}
          style={{
            cursor: 'pointer'
          }}
        />
      </div>
        <h3>{user}</h3>
      </header>
      <div className="main-content-grid">
        <div className='hero-movie'>
          <img
            src={"http://localhost:5000/getCover/" + movie.cover}
            alt=""
          />
          <div className="vin"></div>
        </div>
        <div className="front">
          <div className="front-title">
            <h1 className="title">{movie.title}</h1>
            <p className="year">{movie.year}</p>
            <p className="genres">{genres}</p>
          </div>
          <div className="user-actions">
            <Popup trigger={<button> Escribir Review</button>}  modal>
              <div className="Review"><Review movie={movie._id}/></div>
            </Popup>
            <Popup trigger={<button> Ver Reviews</button>}  modal>
              <div className="Review"><Reviews movie={movie._id}/></div>
            </Popup>
          </div>
        </div>
        <div className="details">
          <hr />
          <div className="detail-wrapper">
            <div className="column1">
              <h3>{movie.title}</h3>
              <p>{movie.sinopsis}</p>
              <ReactStars size="30" value={movie.avg_rating} edit={false} isHalf={true}/>
            </div>
            <div className="info">
              <div className="info1">
                <InfoToken title="Duration:" info={movie.duracion}/>
                <InfoToken title="Release Date:" info={movie.year}/>
                <InfoToken title="Genre:" info={genres}/>
              </div>
              <div className="info2">
                <InfoToken title="Director:" info={movie.director.nombre + ' ' + movie.director.apellido}/>
                <div className="info-token">
                  <h3>Starring:</h3>
                  {movie.elenco.map((actor) => (
                    <div className="actor">
                      <p>{actor.nombre} - {actor.nationality}</p>
                      <ul>
                        {actor.oscar? <li>Oscar Winner</li> : ''}
                        <li>Age: {actor.edad}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie