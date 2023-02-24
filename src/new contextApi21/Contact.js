import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>

<form>
    
    <label for='fname'>Name</label>
    <input type='text' placeholder='Enter your name'></input><br></br>
    <label for='fname'>Email</label>
    <input type='text' placeholder='Enter your email'></input><br></br>
    <label for='fname'>Message</label>
    <input type='text' placeholder='Enter your text'></input><br></br>
    
    <input type='submit' placeholder='send'></input>
   </form>
    </div>
  )
}

export default Contact