import React, { useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { GoPerson } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { IoStorefrontOutline } from 'react-icons/io5'
import { Link } from 'react-router'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu() {
        setIsOpen((prev) => !prev)
        console.log(isOpen)
    }
    return (
        <div className='w-full flex justify-between items-center px-12 py-5'>
            <Link to='/'>
                <div className='flex items-center space-x-1'>
                    <IoStorefrontOutline className='w-6 h-6 md:w-8 md;h-8 text-cta ' />
                    <h1 className='text-xl md:text-2xl'>NFT Marketplace</h1>
                </div>
            </Link>

            <nav className='hidden lg:flex items-center space-x-4'>
                <ul className='flex items-center space-x-4'>
                    <li>
                        <Link to='/marketplace'>Marketplace</Link>
                    </li>
                    <li>
                        <Link to='/'>Rankings</Link>
                    </li>
                    <li>
                        <Link to='/connect-wallet'>Connect a wallet</Link>
                    </li>
                </ul>
                <Link to='/register'>
                    <button className='flex items-center gap-2 p-3 rounded-2xl bg-cta'>
                        <GoPerson />
                        Sign Up
                    </button>
                </Link>
            </nav>
            <button className='lg:hidden' onClick={toggleMenu}>
                <CgMenuLeft />
            </button>

            {/* MOBILE NAV */}
            <div
                className={`w-64 h-screen fixed z-20 ${isOpen ? 'top-0 right-0' : 'top-0 -right-64'} transition-all transition-500 bg-secondaryBackground`}>
                <button
                    className='max-w-max inline-block ml-4 mt-4 bg-caption p-2 rounded-full'
                    onClick={toggleMenu}
                >
                    <IoMdClose size={20} />
                </button>
                <ul className='w-full flex flex-col items-center h-1/2 justify-around'>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Marketplace</Link>
                    </li>
                    <li>
                        <Link>Rankings</Link>
                    </li>
                    <li>
                        <Link>Connect Wallet</Link>
                    </li>
                </ul>
                <div className='bg-cta p-5 text-center rounded-2xl mx-2'>
                    <Link to='/register'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
