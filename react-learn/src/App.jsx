import React from 'react'
import Array from './components/Array'
import { Routes, Route, Link, BrowseRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <link to="/">Home</link>
      <link to="/about">About</link>
      <link to="/contact">Contact</link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}/>
      <Route path="/" element={<AboutPage></AboutPage>}/>
      <Route path="/" element={<ContactPage></ContactPage>}/>
    </Routes>
    </BrowserRouter>
    </>   
  )
}

export default App