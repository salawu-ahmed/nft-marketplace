import React from 'react'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { RiDiscordLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router'

function Footer() {
    return (
        <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <div className='flex flex-col md:flex-row gap-12'>
                <div>
                    <h1>NFT Marketplace</h1>
                    <p>NFT Marketplace created with Anima for Figma</p>
                    <p>Join our community</p>
                    <div className='flex gap-4 items-center'>
                        <RiDiscordLine size={30} />
                        <PiYoutubeLogoLight size={30} />
                        <RiTwitterXLine size={30} />
                        <RiInstagramLine size={30} />
                    </div>
                </div>

                <div>
                    <h2>Explore</h2>
                    <ul>
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
                </div>

                <div>
                    <h2>Join our weekly Digest</h2>
                    <p>Get excluse promotion & updates straight to your inbox</p>
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
