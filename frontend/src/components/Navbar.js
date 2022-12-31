import React from 'react'
import {FaSignInAlt,FaSinghOutAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="header">
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'><FaSignInAlt/> Login</Link>
            </li>
            <li>
                <Link to='/register'><FaUser/> Register</Link>
            </li>
        </ul>
    </nav>

  )
}

export default Navbar