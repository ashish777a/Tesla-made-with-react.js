import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function MenuBooks() {
  return (
    <div className='Heading'>
         <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='services'>Services</NavLink></li>
            <li><NavLink to='blog'>Blog</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
        <Outlet/>
    </div>
    
 
  )
}

export default MenuBooks