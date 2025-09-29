import Card from './components/Card'
import './App.css'
import { useState } from 'react';

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga

const [name,setName]=useState('');
  return (
    <div>
      <Card  title="card1"name={name} setName={setName}/>
      <Card  title="card2"name={name} setName={setName}/>
      {/* <p>i am inside parent component:{name}</p> */}
    </div>
  )
}

export default App
