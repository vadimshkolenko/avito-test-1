import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="avito"/>
        </header>
    )
}

export default Header