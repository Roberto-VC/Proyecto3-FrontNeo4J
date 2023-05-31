

import React, { createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = React.useState({})

  return (
    <MovieContext.Provider value={{movie, setMovie}}>
      { children }
    </MovieContext.Provider>
  )
}
