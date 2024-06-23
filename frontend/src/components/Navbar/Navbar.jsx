import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className='menuIcon'>
          <img src="/menu.png" alt=""
            onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to='/home'>Home</Link>
          <Link to='/home'>About</Link>
          <Link to='/home'>Contact</Link>
          <Link to='/home'>Agents</Link>
          <Link to='/login'>Sign In</Link>
          <Link to='/register'>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}
