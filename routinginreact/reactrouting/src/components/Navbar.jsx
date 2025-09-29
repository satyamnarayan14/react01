import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>about us</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard"className={({isActive})=>isActive?"active-link":""}>dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
