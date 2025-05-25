import React from 'react'
import SubHeader from './SubHeader'
import Header from './Header'

function Navbar() {
  return (
    <div className='fixed w-full z-50'>
        <SubHeader/>
        <Header/>
    </div>
  )
}

export default Navbar