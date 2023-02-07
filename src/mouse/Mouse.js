import React, { useState } from 'react'
import './Mouse.css'





function Mouse() {


  let [mouse,setmouse]= useState('')

  function set(e){
    let x = e.target.clientWidth
    let y = e.target.clientHeight

    setmouse(x + '*' + y)
  }

  return (

    <div className='wrapper' >
        <div className='heading'>
            <p>{mouse}</p>
            <button>Click</button>
        </div>
        <div className='box' onMouseMove={set}>
            
        </div>
    </div>
  )
}

export default Mouse