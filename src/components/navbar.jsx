import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigation } from '../data';
import Logo from '../components/logo'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const location = useLocation();

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-nav-background-color text-nav-text-color'>            
            {/* Logo */}
            <Link to='/'>
                <Logo />
            </Link>
            
            {/* Menu */}
            <ul className='hidden md:flex'>
                {
                    navigation.map((item, key) => (
                        <li key={key}>
                            <Link to={item.to} className={`px-4 font-heading transition duration-500 hover:text-nav-text-color-selected ' ${location.pathname === item.to ? 'text-nav-text-color-selected' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* Bars */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-nav-background-color flex flex-col justify-center items-center md:hidden' : 'hidden'}>
                {
                    navigation.map((item, key) => (
                        <li onClick={handleClick} key={key} className='py-6 text-4xl font-heading'>
                            <Link to={item.to} className={`transition duration-500 hover:text-nav-text-color-selected ' ${location.pathname === item.to ? 'text-nav-text-color-selected' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar;