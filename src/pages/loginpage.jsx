import React from 'react'
import loginImage from '../assets/register.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router'

function LoginPage() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col md:flex-row items-center gap-16'>
                <div className='flex-1'>
                    <img src={loginImage} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl md:text-5xl'>Create Account</h1>
                    <p>Welcome! Enter your details and start creating collecting and selling NFTs</p>
                    <form action="">
                        <div className='w-64 h-10 mb-4 bg-white rounded-full overflow-hidden'>
                            <input
                                type="text"
                                placeholder='Username'
                                className='w-full h-full p-4 text-background  outline-none'
                            />
                        </div>
                        <div className='w-64 h-10 mb-4 bg-white rounded-full'>
                            <input
                                type="email"
                                placeholder='Username'
                                className='w-full h-full p-4 text-background  outline-none'
                            />                        </div>
                        <div className='w-64 h-10 mb-4 bg-white rounded-full'>
                            <input type="text"
                                placeholder='Username'
                                className='w-full h-full p-4 text-background  outline-none'
                            />
                        </div>
                        <div className='w-64 h-10 mb-4 bg-white rounded-full'>
                            <input
                                type="text"
                                placeholder='Username'
                                className='w-full h-full p-4 text-background  outline-none'
                            />                        </div>
                        <button type='submit'>Create Account</button>
                    </form>
                    <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoginPage
