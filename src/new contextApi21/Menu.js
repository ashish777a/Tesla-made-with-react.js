import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Context from './CartPage'

function Menu() {
   const {pro} =useContext(Context)
  return (
    <>    
    <div className='home'>
         <h1>Ecommerce</h1>
        <ul>
          <h1>Amozne</h1>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/cart'>Cart <span>{pro.length}</span></NavLink></li>
        </ul>
        
    </div>
    <Outlet/>
    </>
    
  ) 
}

export default Menu