import { UserContext } from "../src/App"
const ChildC = () => {
  const user = useContext(UserContext); 
  return (
    <div>
        {user.name}
    </div>
  )
}

export default ChildC