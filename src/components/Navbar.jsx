import React from 'react'
import { Link } from 'react-router-dom';
import { FaCoins } from "react-icons/fa";

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/'>
            <FaCoins className='icon' />
            <h1> Coin <span className='purple'>Search</span></h1>
        </Link>
    </div>
  )
}

export default Navbar