import React from 'react'
import { PiRocketLaunch } from 'react-icons/pi'
import heroImage from '../assets/heroSection_image.png'
import avatar from '../assets/heroSection_avatar.png'

function HeroSection() {
    return (
        <section className='container mx-auto w-full h-auto lg:h-screen flex flex-col gap-y-6 md:flex-row md:justify-between md:gap-x-12 py-7 px-12 lg:py-14 lg:px-24 ' >
            <div className='w-full md:w-1/2 mb-3 md:mb-0 flex-1 '>
                <h1 className='text-3xl md:text-4xl lg:text-7xl mb-4'>Discover Digital Art & Collect NFTs</h1>
                <p className='text-l md:text-xl lg:text-2xl mb-4'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <button className='hidden md:flex items-center gap-2 p-3 rounded-2xl bg-cta mb-8'>
                    <PiRocketLaunch />
                    Get Started
                </button>
                <ul className='hidden md:flex items-center justify-between'>
                    <li>
                        <p className='text-xl lg:text-3xl'>240k+</p>
                        <p>Total Sales</p>
                    </li>
                    <li>
                        <p className='text-xl lg:text-3xl'>100k+</p>
                        <p>Auctions</p>
                    </li>
                    <li>
                        <p className='text-xl lg:text-3xl'>240k+</p>
                        <p>Artists</p>
                    </li>
                </ul>
            </div>


            <div className='w-full md:w-1/2 lg:w-2/5 rounded-xl overflow-hidden flex-1'>
                <div className='w-full h-4/5'>
                    <img src={heroImage} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='h-full flex flex-col bg-secondaryBackground gap-2 p-4 md:p-2 lg:p-5'>
                    <p>Space Walking</p>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full relative'>
                            <img src={avatar} alt="" className='w-full h-full object-fill rounded-full' />
                        </div>
                        <p>Animakid</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col space-y-6 md:hidden'>
                <button className='w-full flex justify-center md:hidden items-center gap-2 p-3 rounded-2xl bg-cta'>
                    <PiRocketLaunch />
                    Get Started
                </button>
                <ul className='w-full flex gap-2 md:hidden items-center justify-between'>
                    <li>
                        <p className='text-xl font-semibold sm:text-xl'>240k+</p>
                        <p className='text-xs'>Total Sales</p>
                    </li>
                    <li>
                        <p className='text-xl font-semibold sm:text-xl'>100k+</p>
                        <p className='text-xs'>Auctions</p>
                    </li>
                    <li>
                        <p className='text-xl font-semibold sm:text-xl'>240k+</p>
                        <p className='text-xs'>Artists</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HeroSection
