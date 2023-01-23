import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './Axiosbox.css'
import { Title } from '@mui/icons-material'

function Axiosbox() {

    let [products,setProducts] = useState([])

    useEffect (()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
       .then((responsiv)=>{
        console.log(responsiv.data)
        setProducts(responsiv.data)
       })
    },[])



  return (
    <>  
     <h1>Ecommerce </h1>
   <div className='box'>
    {
        products.map((product)=>{
            return(
                <div className='out'>
                    <img src={product.thumbnailUrl}></img>
                    <h2>{product.title}</h2>
                    <p>{product.id}</p>
                </div>
            )
        })
    }

   </div>
   </>

  )
}

export default Axiosbox