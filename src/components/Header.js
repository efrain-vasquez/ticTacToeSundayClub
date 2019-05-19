import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <div>
      <h1>Welcome to Tic-Tac-Code</h1>
      <button className='button is-text'><Link to='/Board'>Play</Link></button>
    </div>
  </div>
)

export default Header
