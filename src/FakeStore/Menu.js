import React from 'react'
import {Link,NavLink, Outlet} from 'react-router-dom'


function Menu() {
  return (
    <>
        <div className='boxs'>
        <ul>
            <h1>Amazon</h1>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
            
        </ul>
    </div>
    <Outlet/>
    </>
  )
}

export default Menu