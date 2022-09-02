import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Dev from "./pages/Dev"
import Video from "./pages/Video"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dev' element={<Dev />}/>
          <Route path='/video' element={<Video />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
