import { Link } from "react-router-dom"
import React from 'react'

const NavBar = () => {
  return (
    <nav className="navBar">
      <h2>
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/`}>Novo Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar