import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked");


  }
  function handleMouseOver(){
    alert(" para ke upar mouse lekaar aaye ho");
  }
  function handleInputChange(e){
    console.log("value till now ",e.target.value);
    // console.log('input mae value change hui hai')

  }
  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behavior down 
    alert("form submit kara du kya")

  }


  return (
    <div>
      <button onClick={()=>alert("button click hua h")}>click me</button>

      {/* <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{
          handleInputChange(e)
        }} />
        <button type='submit'>submit</button>




      </form> */}
      {/* <p onMouseOver={handleMouseOver} style={{border:"2px solid black"}}>
        i am a para
      </p>
      <button onClick={handleClick}>click me</button> */}
    </div>
      
  
  )
}

export default App
