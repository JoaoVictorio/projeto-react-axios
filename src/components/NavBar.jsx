import { Link } from "react-router-dom"
import React from 'react'

const NavBar = () => {
  return (
    <nav className="navBar">
      <h2>
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li></li>
      </ul>
    </nav>
  )
}

export default NavBar