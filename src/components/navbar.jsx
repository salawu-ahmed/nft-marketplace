import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { GoPerson } from 'react-icons/go'
import { IoStorefrontOutline } from 'react-icons/io5'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='w-full flex justify-between items-center px-12 py-5'>
            <div className='flex items-center space-x-1'>
                <IoStorefrontOutline className='w-6 h-6 md:w-8 md;h-8 text-cta ' />
                <h1 className='text-xl md:text-2xl'>NFT Marketplace</h1>
            </div>

            <nav className='hidden lg:flex items-center space-x-4'>
                <ul className='flex items-center space-x-4'>
                    <li>
                        <Link to='/'>Marketplace</Link>
                    </li>
                    <li>
                        <Link to='/'>Rankings</Link>
                    </li>
                    <li>
                        <Link to='/'>Connect a wallet</Link>
                    </li>
                </ul>
                <button className='flex items-center gap-2 p-3 rounded-2xl bg-cta'>
                    <GoPerson />
                    Sign Up
                </button>
            </nav>
            <div className='lg:hidden'>
                <CgMenuLeft />
            </div>
        </div>
    )
}

export default Navbar
