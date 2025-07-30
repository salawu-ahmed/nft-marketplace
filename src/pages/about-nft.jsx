import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import banner from '../assets/artist-page-banner.png'


function AboutNFT() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-96  relative'>
                <img src={banner} alt="" className='w-full h-full object-cover' />
            </div>
            <Footer />
        </div>
    )
}

export default AboutNFT
