import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav>Navbar
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
        </div>
    </nav>
  )
}

export default Navbar