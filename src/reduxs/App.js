import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment , Decrement } from '../fetures/counter/counterSlice'
function App() {

  const counters = useSelector((state) =>state.count.value)
  const dispatch = useDispatch()

  return (
    <div>

        <button onClick={() => dispatch(Increment())}>Increment</button>
        <p>{counters}</p>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>

    </div>
  )
}

export default App