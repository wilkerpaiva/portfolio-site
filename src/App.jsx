import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Dev from "./pages/Dev"
import Video from "./pages/Video"

function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />}/>
          <Route path='/dev' element={<Dev />}/>
          <Route path='/video' element={<Video />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </AnimatePresence>
    </>

  )
}

export default App
