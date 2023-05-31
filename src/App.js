// React
import React, { useState } from 'react'
import {useNavigate, BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Components
import Review from './components/Review'
import HomePage from './pages/Homepage'
import LogIn from './components/LogIn'
import Movie from './pages/Movie'
import Signup from './components/SignUp'

// style imports
import './styles/App.css'
import './styles/Homepage.scss'

// Context provider
import { MovieProvider } from './contexts/movieProvider'

function App() {

  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/review' element={<Review />}/>
            <Route path='/Movie' element={<Movie />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<LogIn />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  )
}

export default App

