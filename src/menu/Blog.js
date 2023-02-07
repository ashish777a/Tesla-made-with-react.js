import axios from 'axios'
import React, { useEffect, useState } from 'react'




function Blog() {

let [blog,setblog] =useState([])

useEffect(()=>{
  async function data(){
    let resposiv = await axios.get("https://jsonplaceholder.typicode.com/post")
    setblog(resposiv)
    console.log(resposiv)
  }
},[])



  return (
    <div>
      <h1>dwcbdehwch</h1>
      {
        blog.map((set,get)=>{
          return(
            <h1>{Blog}</h1>
            
          )
          

        })
       

      }
    </div>
  )
}

export default Blog