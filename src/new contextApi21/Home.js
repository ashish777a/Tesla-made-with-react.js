import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import  Context  from './CartPage'

function Home() {
      const {cart ,clickdata}=useContext(Context)


  return (


    
    <div className='page'>
        {
            cart.map((done ,index)=>{
                return(
                    <div className='box'>
                      <a href=''><img src={done.image}></img></a>  
                        <p>Title (=$)  {done.title}</p>
                        <h4>Price /  {done.price}</h4>
                        <a href='' onClick={(e)=>clickdata(e,index)}>Add To Cart</a>


                    </div>
                )
            })
        }


    </div>
  )
}

export default Home