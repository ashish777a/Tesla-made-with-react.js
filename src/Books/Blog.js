import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog() {

  let [blog, setblog] = useState([])
  useEffect(() => {

    function data() {
      axios.get('https://openlibrary.org/subjects/love.json?limit=20')
        .then((Response) => {
          console.log(Response.data.works)
          setblog(Response.data.works)
        })
    }
    data()

  }, [])

  return (
    <>
      <h1>Blog</h1>
      <div className='blogs'>
        {
          blog.map((set, value) => {
            return (
              <div className='images'>
                <h2>{set.title}</h2>
                <p>{set.authors[0].name}</p>
                <img src={`https://covers.openlibrary.org/b/id/${set.cover_id}-L.jpg`}></img>
              </div>

            )
          })
        }


      </div>
    </>

  )
}

export default Blog