import React from 'react'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { RiDiscordLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router'

function Footer() {
    return (
        <section className='container bg-secondaryBackground mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <div className='flex flex-col md:flex-row md:justify-evenly gap-12'>
                <div className='w-1/3'>
                    <p className='text-h5 font-spaceMono font-semibold mb-4'>NFT Marketplace</p>
                    <p className='font-workSans text-body text-footerText mb-4'>NFT Marketplace created with Anima for Figma</p>
                    <p className='font-workSans text-body text-footerText'>Join our community</p>
                    <div className='flex gap-4 items-center text-footerText'>
                        <RiDiscordLine size={30} />
                        <PiYoutubeLogoLight size={30} />
                        <RiTwitterXLine size={30} />
                        <RiInstagramLine size={30} />
                    </div>
                </div>

                <div className='w-1/3'>
                    <p className='text-h5 font-spaceMono font-medium'>Explore</p>
                    <ul>
                        <li>
                            <Link to='/marketplace' className='font-workSans text-footerText text-body'>Marketplace</Link>
                        </li>
                        <li>
                            <Link to='/' className='font-workSans text-footerText text-body'>Rankings</Link>
                        </li>
                        <li>
                            <Link to='/connect-wallet' className='font-workSans text-footerText text-body'>Connect a wallet</Link>
                        </li>
                    </ul>
                </div>

                <div className='mb-12 '>
                    <p className='text-h5 font-spaceMono font-medium'>Join our weekly Digest</p>
                    <p className='w-2/3 text-body font-workSans text-footerText'>Get excluse promotion & updates straight to your inbox</p>
                    <div className='flex items-center h-10 rounded-2xl bg-white pl-4'>
                        <input type='email' placeholder='Enter your email here' className='w-full text-background h-full outline-none' />
                        <button className='rounded-2xl h-full px-12 text-white bg-cta'>Subscribe</button>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="w-full border-t-2 border-t-caption">
                <p>Created by salawu ahmed</p>
            </div>
        </section>
    )
}

export default Footer
