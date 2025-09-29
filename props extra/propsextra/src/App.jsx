import './App.css'
import React, { useState } from 'react'
import Card from './component/Card'
import Button from "./component/Button"


const App = () => {
  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <Button
    
  //   <=Card name="satyam">
  //     <h1>satyam web dev attend kar raha hai</h1>

  //   </Card>
  )
}

export default App