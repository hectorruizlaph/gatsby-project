import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default Layout