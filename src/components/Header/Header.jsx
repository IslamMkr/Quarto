import React from 'react'

import './Header.css'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='app-header'>
        <h1>Quarto</h1>
        <nav>
            <ul className='header-links'>
                <li>
                    <Link to='/'>Jouer</Link>
                </li>
                <li>
                    <Link to='/learn'>Apprendre</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header