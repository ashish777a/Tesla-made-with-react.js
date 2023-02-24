import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import './Fake.css'


function AppFakeStore() {
  return (
    
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            </Route> 
        </Routes>
        </BrowserRouter>
   
  )
}

export default AppFakeStore