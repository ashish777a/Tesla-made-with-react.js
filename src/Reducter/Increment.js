import React, { useReducer } from 'react'


function reducer(state,action){
  return state;
}

function Increment() {

  // let [on,seton]=useState('')

     let [state ,dispatch] = useReducer(reducer,initialState);

  return (
    <div>Increment

      <p>{state}</p>

      <button onClick={()=>dispatch(state +1)}>Increment</button>
      <button onClick={()=>dispatch(state -1)}>Decrement</button>

    </div>
  )
}

export default Increment