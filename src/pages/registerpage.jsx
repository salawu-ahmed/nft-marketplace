import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router'
import registerImage from '../assets/register.png'

function RegisterPage() {
    return (
        <div>
            <Navbar />
            {/* <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'> */}
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1'>
                        <img src={registerImage} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-2xl md:text-5xl'>Create Account</h1>
                        <p>Welcome! Enter your details and start creating collecting and selling NFTs</p>
                        <form action="">
                            <div>
                                <input type="text" placeholder='Username' />
                            </div>
                            <div>
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div>
                                <input type="password" placeholder='Password' />
                            </div>
                            <div>
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                            <button type='submit'>Create Account</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            {/* </section> */}
            <Footer />
        </div>
    )
}

export default RegisterPage
