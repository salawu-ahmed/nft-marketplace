import React from 'react'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { RiDiscordLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router'

function Footer() {
    return (
        <section className='container bg-secondaryBackground mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <div className='flex flex-col md:flex-row md:justify-between gap-12'>
                <div>
                    <p className='text-h5 font-spaceMono font-semibold'>NFT Marketplace</p>
                    <p className='font-workSans text-body text-footerText'>NFT Marketplace created with Anima for Figma</p>
                    <p className='font-workSans text-body text-footerText'>Join our community</p>
                    <div className='flex gap-4 items-center text-footerText'>
                        <RiDiscordLine size={30} />
                        <PiYoutubeLogoLight size={30} />
                        <RiTwitterXLine size={30} />
                        <RiInstagramLine size={30} />
                    </div>
                </div>

                <div>
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

                <div>
                    <p className='text-h5 font-spaceMono font-medium'>Join our weekly Digest</p>
                    <p className='w-2/3 text-body font-workSans text-footerText'>Get excluse promotion & updates straight to your inbox</p>
                    <div>
                        <input type='email' placeholder='Enter your email here' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
