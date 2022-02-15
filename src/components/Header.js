import React from 'react'
import Navlink from './Navlink'

const Header = () => {
  return (
    <div className="header">
        <h1 className="title">Rock Paper Scissor</h1>
        <nav className="nav">
          <Navlink link={'https://github.com/sarath1405/rock-paper-scissor'} text={'GitHub'}/>
        </nav>
    </div>
  )
}

export default Header