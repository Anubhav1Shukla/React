import React from 'react'
import Home from '../ComponentsII/Home'
import User from '../ComponentsII/User'
import About from '../ComponentsII/About'
import { Route,Routes } from 'react-router-dom'
import UserDetails from '../ComponentsII/UserDetails'
const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user" element={<User/>}>

    <Route path="/user/:name" element={<UserDetails/>}/>
    </Route>
    
    <Route path="/about" element={<About/>}/>
</Routes>
  )
}

export default Routing
