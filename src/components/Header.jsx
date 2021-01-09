import React from 'react'
import './Header.css'
import logo from '../assets/img/pokemon-logo.png'

const Header = props => 
    <div className="Header">
        <img src={logo} alt="Pokemon"/>
    </div>

export default Header