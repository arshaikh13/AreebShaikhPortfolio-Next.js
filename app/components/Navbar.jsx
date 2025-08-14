"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" }, 
    { title: "Contact", path: "#contact" },
]

const Navbar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-11 bg-[#141b25]/90'>
            <div className="flex flex-wrap items-center justify-between mx-auto p-5">
                <Link 
                href="/" 
                className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 hover:drop-shadow-lg transition-all duration-300 font-mono tracking-wide"
                >
                Areeb.
                </Link>

                <div className='block md:hidden'>
                    <button
                        onClick={() => setNavBarOpen(!navbarOpen)}
                        className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-white'
                    >
                        {navbarOpen ? (
                            <XMarkIcon className='h-4 w-5' />
                        ) : (
                            <Bars3Icon className='h-4 w-5' />
                        )}
                    </button>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    );
};

export default Navbar;
