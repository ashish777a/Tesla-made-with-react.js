import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Cart from './Cart'
import About from './About'
import Menu from './Menu'
import Context from './CartPage'
import "./Shoping.css"

function Appcontext21() {

  let [cart, setcart] = useState([])
  let [pro, setpro] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response.data)
        setcart(response.data)

      })
  })

  function clickdata(e, index) {
    e.preventDefault()
    setpro([...pro, index])
  }

  return (
    <div className='rouat'>
      <Context.Provider value={{ cart, clickdata, pro }}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </Context.Provider>

    </div>
  )
}

export default Appcontext21