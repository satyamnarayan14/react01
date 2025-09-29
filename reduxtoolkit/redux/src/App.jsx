

import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { increment, decrement,reset,incrementByAmount } from './feature/counter/counterSlice.jsx'
function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
   <div className='container'>
    <button onClick={handleIncrement}>+</button>
    <p>count:{count}</p>
    <button onClick={handleDecrement}>-</button>
    <br />
    <br />
    <button onClick={handleReset}>Reset</button>
    <input type="Number" value={amount} placeholder="Enter amount" onChange={(e) => setAmount(Number(e.target.value))} />
    <br />
    <br />
    <button onClick={() => dispatch(incrementByAmount(amount))}>Add Amount</button>
   </div>
  )
}

export default App
