import React from 'react'
import Menuspage from './Menuspage'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import About from './About'
import Blog from './Blog'
import Notefound from './Notefound'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function Menu() {
  return (
   <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/services' element={<Services/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     {/* <Route path='*' element={<Notfound/>}></Route> */}
   </Routes>
   </BrowserRouter>
  )
}

export default Menu