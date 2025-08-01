import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router'
import registerImage from '../assets/register.png'
import { LuUserRound } from 'react-icons/lu'
import Button from '../components/button'

function RegisterPage() {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-16'>
                <div className='flex-1'>
                    <img src={registerImage} alt="" />
                </div>

                <div className='flex-1'>
                    <h1 className='text-h3 md:text-h2 font-workSans md:text-5xl mb-3'>Create Account</h1>
                    <p className='text-body font-workSans mb-3'>Welcome! Enter your details and start creating <br /> collecting and selling NFTs</p>
                    <form action="" className='flex flex-col gap-3 mb-3'>
                        <div className='w-full  md:w-1/2 flex items-center gap-2 bg-white h-10 rounded-full px-4'>
                            <LuUserRound size={20} className='text-caption'/>
                            <input
                                type="text"
                                placeholder='Username'
                                className='text-caption w-full outline-none h-full '
                            />
                        </div>
                        <div className='w-full  md:w-1/2 flex items-center gap-2 bg-white h-10 rounded-full px-4'>
                            <LuUserRound size={20} className='text-caption'/>
                            <input
                                type="email"
                                placeholder='Email Address'
                                className='text-caption w-full outline-none h-full '
                            />
                        </div>
                        <div className='w-full  md:w-1/2 flex items-center gap-2 bg-white h-10 rounded-full px-4'>
                            <LuUserRound size={20} className='text-caption'/>
                            <input
                                type="password"
                                placeholder='Password'
                                className='text-caption w-full outline-none h-full '
                            />
                        </div>
                        <div className='w-full  md:w-1/2 flex items-center gap-2 bg-white h-10 rounded-full px-4'>
                            <LuUserRound size={20} className='text-caption'/>
                            <input
                                type="password"
                                placeholder='Confirm POssword'
                                className='text-caption w-full outline-none h-full '
                            />
                        </div>
                        <button className="w-full  md:w-1/2 bg-cta h-12 text-white rounded-2xl">Create Account</button>
                    </form>
                    <p className='mb-8'>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
