import {  useState } from 'react'
import './App.css'

function App() {
  const[time,setTime]=useState(0);
  

  function startTimer() {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

function stopTimer() {
  setTime((time) => time);
}

function resetTimer() {
  setTime(0);
}

  // const [count, setCount] = useState(0)
  // let val=useRef(0);
  // let btnRef=useRef();
  // function handleClick(){
  //   val.current=val.current+1;
  //   console.log("value of val:",val.current)
    
  //   setCount(count + 1);
  // }

  // //it runs on every render
  // useEffect(() => {
  //   console.log('main ferse render hogaya hu')

    
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor="red";
  
  return (
   <div>
    <h1>stopWatch: {time} seconds
    </h1>
    <button onClick={startTimer}>Start</button>
    <br /><br />

    <button onClick={stopTimer}>Stop</button>
    <br /><br />
    <button onClick={resetTimer}>Reset</button>
    {/* <button  ref={btnRef} onClick={handleClick}>
      Increment
    </button>
    <br />

    <button onClick={changeColor}>
      change color of 1st button
    </button>

    <br />
   
   <div>
    Count is {count}
   </div> */}
    </div>
  )
}


export default App
