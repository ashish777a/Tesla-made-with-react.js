import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Fake.css'

function FakeStore() {
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
                return(
                    <div className='box'>
                    <img src={box.image}></img>
                    <a href=''>Add To Cart</a>
                    </div>
                )


                })
            }
        </div>


    )
}

export default AppFake