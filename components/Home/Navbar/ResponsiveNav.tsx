"use client";
import React, { useState } from 'react'
import Navbar from './Nav'
import Mobilenav from './MobileNav'

const ResponsiveNev = () =>
{
    const [showNav, setShowNav] = useState (false)
    const handNavShow = () => setShowNav(true);
    const handleCloseNav =() => setShowNav (false);
    return (
        <div>
            <Navbar openNav = {handNavShow}/>
            <Mobilenav showNav = {showNav}closeNav={handleCloseNav}/>
        </div>
    )
}


export default ResponsiveNev;