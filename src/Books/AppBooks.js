import React from 'react'
import MenuBooks from './MenuBooks'
import Home from './Home'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'
import './Books.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Notefound from '../menu/Notefound'
function AppBooks() {
  return (
    <div className='page'>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuBooks/>}>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<Notefound/>}></Route>
                
                

                </Route>
                
            </Routes>
       </BrowserRouter>

    </div>
  )
}

export default AppBooks