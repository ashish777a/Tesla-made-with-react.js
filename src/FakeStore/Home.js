import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Home() {
  const [Store, setStore] = useState([])


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/')
      .then((resposiv) => {
        console.log(resposiv.data)
        setStore(resposiv.data)
      })
  }, [])



  return (
    <div className='page'>
      {
        Store.map((box) => {
          return (
            <div className='box'>
              <img src={box.image}></img>
              <a href=''>ADD TO CART</a>
            </div>
          )


        })
      }
    </div>


  )
}

export default Home