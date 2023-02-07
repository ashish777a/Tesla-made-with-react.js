import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>Menu
        <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>Services</Link></li>
            <li><Link to=''>Blog</Link></li>
            <li><Link to=''>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Menu