

import { useEffect ,useState} from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TImerComponent from './components/TImerComponent'
import DataFetcher from './components/Datafetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  // const [count,setCount]=useState(0);
  // const [total ,setTotal]=useState(1);

  // first-> side-effect function
  //second->clean up function
  //third-> comma separated dep list


  //variation :1
  //runs on every render

  // useEffect(() => {
  //   alert("i will run on every render")
  // })

  //variation:2
  //that runs only on first render
  // useEffect(() => {
  //   alert("i will only render on first render")
  
  
  // }, [])
  //variation:3
  // useEffect(() => {
  //   alert("i will run only when the count is updated")
  
  // }, [count])

  //variation:4
  //multiple dependencies
  // useEffect(() => {
  //   alert("i will update every time when count/time is updated") 
  // }, [count,total])

  //variation:5
  //iss baar lets add a cleanup function

  // useEffect(() => {
  //   alert("count is updated")
  
  //   return () => {
  //     alert("count is unmounted from UI");
  //   }
  // }, [count])
  
  

  
  
  

  // function handleClick(){
  //   setCount(count+1);
    
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);


  // }
  


  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TImerComponent /> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}
      {/* <button onClick={handleClick}>
        update count
      </button>
      <br />
      count is :{count}

      <br />
      <button onClick={handleClickTotal}>
        update total
      </button>
      <br />
      Total is :{total} */}

    </div>
  );
}

export default App
