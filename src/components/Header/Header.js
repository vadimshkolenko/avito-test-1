import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to={'/'}>
                <img src={logo} alt="avito"/>
            </NavLink>   
        </header>
    )
}

export default Header