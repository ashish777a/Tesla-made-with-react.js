import React , {useState}from 'react'
import './Todolist.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
function ToDoList() {
  
  let [inputvalue,setinput]= useState('')
  let [login,setlogin] = useState([])
  let [checkin, setcheck] =useState([])
  let [edits , setedit] =useState(false)
  


  function handlechange(e){
    setinput(e.target.value)
    console.log(inputvalue)
  }
  

  function Submit(e){
   e.preventDefault()
   if(edits ===false){
    setlogin([...login ,inputvalue])}
    else{
      login[edits]=inputvalue
      setedit(false)
    }
    // console.log(login)

    setinput('')
  }



  function dell(e,id){
    e.preventDefault()
    setlogin(login.filter((e,num)=>{
      return id !==num 
    }))    
  }


  function edit(e,pop){
    e.preventDefault()
    setinput(login[pop])
    setedit(pop)    
  }

  function check(e,on){
    e.preventDefault()
    setcheck(on)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={Submit}>
        <input type='text' placeholder='enter you text'
          value={inputvalue}
          onChange={handlechange}
        ></input>
        <button type='submit'>Add List </button>
      </form>
      <ul>
        {
          login.map((item,index)=>{
            return(
              <li className={(checkin.includes(item) 
                ?'complete':'')}>
                {item}
                <a href=''onClick={(e)=>dell(e,index)} > <DeleteIcon/> </a>
                <a href=''onClick={(e)=>edit(e,index)}>  <EditIcon/> </a>
                <a href=''onClick={(e)=>check(e,item)}
                 >  <CheckIcon/> </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ToDoList