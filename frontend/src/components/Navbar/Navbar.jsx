import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className='left'>
        <Link to="/" className='logo'>
          <img src="/logo.png" alt="" />
          <span>RealEstate</span>
        </Link>

        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>

      <div className='right'>
        <Link to='/'>Sign In</Link>
        <Link to='/' className='register'>Sign Up</Link>
        <div className='menuIcon'>
          <img src="/menu.png" alt=""
            onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          <Link to='/'>Sign In</Link>
          <Link to='/'>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}
