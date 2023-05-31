import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from '../assets/logo.png'


const Header = (props) => {
  const navigate = useNavigate()
  const user = localStorage.getItem('username')
  
  if (user === null) return (
    <header className="main-nav">
      <img src={logo} alt="RB-Movies" className="logo" />
      <div className="register">
        <button 
          className="login"
          onClick={() => navigate('/Login')}
        >
          Login
        </button>
        <button 
          className="signin"
          onClick={() => navigate('/signup')}
          >
          Sign-In
        </button>
      </div>
    </header>
  ) 
  
  return (
    <header className="main-nav">
      <div className="nav-container">
        <img src={logo} alt="RB-Movies" className="logo" />
        <input
          type="text"
          className="search-bar"
          onChange={(event) => props.changeinfo(event.target.value)}
        />
        <div className="dropdown">
        <button className="dropbtn">Filtro</button>
          <div className="dropdown-content">
          <button onClick={() => props.changedata("none")}>Escoja Filtro</button>
            <button onClick={() => props.changedata("title")}>Title</button>
            <button onClick={() => props.changedata("genre")}>Gender</button>
          </div>
        </div> 
      </div>
      <h3>{user}</h3>
    </header>

  )
}

export default Header
