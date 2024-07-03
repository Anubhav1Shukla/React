import React from 'react'
import Home from '../ComponentsII/Home'
import User from '../ComponentsII/User'
import About from '../ComponentsII/About'
import { Route,Routes } from 'react-router-dom'
const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>
  )
}

export default Routing
