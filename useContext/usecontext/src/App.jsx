import { createContext } from 'react';
import './App.css'
import ChildA from '../components/childA';
import ChildC from '../components/childC';
//step:1 create context
const UserContext=createContext();
//step2:wrap all the child inside a provider
//step3: pass value
//step4: consumer k ander jaake consume karlo

function App() {
  const [user,setUser]=useState({name:"Satyam"});
  

  return (
   <>
    <UserContext.Provider value={user}>
      <ChildC/>
    </UserContext.Provider>
   </>
  )
}

export default App
export {UserContext}
