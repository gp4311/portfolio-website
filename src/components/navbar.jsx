import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigation } from '../data'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-nav-background-color text-text-color-1'>            
            {/* Logo */}
            <div>
            </div>
            
            {/* Menu */}
            <ul className='hidden md:flex'>
                {
                    navigation.map((item, key) => (
                        <li key={key} className='px-4 font-heading'>
                            <Link to={item.to}>
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
                            <Link to={item.to}>
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