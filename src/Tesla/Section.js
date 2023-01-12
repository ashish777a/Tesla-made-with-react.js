import React from 'react'

function Section(props) {
  return ( 
            <section className='images' style={{backgroundImage: `url("tesla images/${props.backgroundImage}")`}}>
                <section className='heading'>
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>
                </section>
                <section className='act'>
                    <a href=''>{props.leftbtn}</a>
                    {props.rightbtn &&<a href=''>{props.rightbtn}</a>}

                    <div className='arrow'>
                        {props.on && <img src='tesla images/down-arrow.svg'/>}
                    </div>
                </section>
               
            </section>
           
  )
}

export default Section