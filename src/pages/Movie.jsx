import React, { useContext } from "react";
import { MovieContext } from "../contexts/movieProvider";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router";
import InfoToken from "../components/InfoToken";
import ReactStars from "react-rating-stars-component";
import Popup from 'reactjs-popup';
import Review from "../components/Review";
import Reviews from "../components/Reviews";

import banner from '../assets/banner.png'

const Movie = () => {
  const { movie } = useContext(MovieContext)
  console.table(movie)
  const user = localStorage.getItem('username')
  const navigate = useNavigate()

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
            src={banner}
            alt=""
          />
          <div className="vin"></div>
        </div>
        <div className="front">
          <div className="front-title">
            <h1 className="title">{movie.nombre}</h1>
            <p className="year">{movie.release_date._Date__year}</p>
          </div>
          <div className="user-actions">
            <Popup trigger={<button> Escribir Review</button>}  modal>
              <div className="Review"><Review movie={movie.movie_id}/></div>
            </Popup>
            <Popup trigger={<button> Ver Reviews</button>}  modal>
              <div className="Review"><Reviews movie={movie.movie_id}/></div>
            </Popup>
          </div>
        </div>
        <div className="details">
          <hr />
          <div className="detail-wrapper">
            <div className="column1">
              <h3>{movie.nombre}</h3>
              <p>{movie.descripcion}</p>
              <ReactStars size="30" value={movie.rating} edit={false} isHalf={true}/>
            </div>
            <div className="info">
              <div className="info1">
                <InfoToken title="Duration:" info={movie.duracion}/>
                <InfoToken title="Release Date:" info={movie.release_date._Date__year}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie