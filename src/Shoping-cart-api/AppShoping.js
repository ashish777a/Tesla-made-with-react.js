import React,{axios} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../shoppingCart/Home'
import About from '../shoppingCart/About'
import Cart from '../shoppingCart/Cart'
import { useState } from 'react'


function AppShoping() {

  let [cart , setcart] = useState([]);

  function data() {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      // console.log(response.data);
      setcart(response.data);
    });
  data();
  }
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/cart' element={<Cart/>} ></Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default AppShoping