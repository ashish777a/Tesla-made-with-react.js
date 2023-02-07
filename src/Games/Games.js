import React from 'react'
import './Games.css'
function Games() {
  return (
    <>
    <div className='page1'>
        <h2>Catch the Cheems</h2>
         <button>Play Games</button>
    </div>
    <div className='page2'>
        <h2>Which cheems you want to catch?</h2>
        <div className='img'>
          <h2>Dog</h2>
          <img src='Games images/IMG_20230113_233335_285.png'></img>
         <div className='img'></div>
         <h2>Dog</h2>
          <img src='Games images/IMG_20230113_233408_346.png'></img>
         <div className='img'></div>
         <h2>Dog</h2>
          <img src='Games images/IMG_20230113_233420_182.png'></img>
        </div>
    </div>
    </>
  )
}

export default Games