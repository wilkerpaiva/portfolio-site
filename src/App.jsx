import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Dev from "./pages/Dev"
import Video from "./pages/Video"
import Mylinks from "./pages/Mylinks"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./components/Layout"

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/dev' element={<Dev />}/>
            <Route path='/video' element={<Video />}/>
            <Route path='/about' element={<About />}/>
          </Route>
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/mylinks' element={<Mylinks />}/>
        </Routes>
      </AnimatePresence>
    </>

  )
}

export default App
