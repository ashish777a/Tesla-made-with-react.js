import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './axios.css'
function Axiosdata() {

      let [products,setProducts] =useState([])

      useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
          console.log(response.data.products)
          setProducts(response.data.products)
        })
      },[])


  return (
    <>
        <h1>Ashish</h1>
        <div className='iphone'>
        {
        products.map((product)=>{
          return(
            <div className='wrap'>
          <img src={product.thumbnail}></img>
          <h1>{product.title}</h1>
          </div>
          )
          
        })
        
    
    }
    </div>
  
  </>
  )
}


export default Axiosdata