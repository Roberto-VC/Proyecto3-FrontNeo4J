// React
import { useState } from "react"
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

// Components
import Signup from "./components/SignUp"
import LogIn from "./components/LogIn"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
