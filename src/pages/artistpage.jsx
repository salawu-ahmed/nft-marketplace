import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router'
import Section from '../components/section'
import Button from '../components/button'
import { RiDiscordLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import banner from '../assets/artist-page-banner.png'

function ArtistPage() {
    return (
        <div>
            <Navbar />
            <div>
                <div className='w-full h-1/2 overflow-hidden'>
                    <img src={banner} alt="" className='w-full h-full object-fit'/>
                </div>
                <Section>
                    <div className='w-full flex flex-col md:flex-row md:justify-between'>
                        <h2>Animakid</h2>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div>
                                <Button type='secondary'>Copy ID</Button>
                            </div>
                            <div>
                                <Button type='primary'>Follow</Button>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full md:w-1/3 justify-between'>
                        <div>
                            <p>250k+</p>
                            <p>Volume</p>
                        </div>
                        <div>
                            <p>50+</p>
                            <p>NFTs sold</p>
                        </div>
                        <div>
                            <p>3000+</p>
                            <p>Followers</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-caption'>Bio</p>
                        <p>The internet's friendliest design kid.</p>
                    </div>

                    <div>
                        <p className='text-caption'>Links</p>
                        <div className='flex gap-4 items-center'>
                            <RiDiscordLine size={30} color='#858584' />
                            <PiYoutubeLogoLight size={30} color='#858584' className='text-caption'/>
                            <RiTwitterXLine size={30} color='#858584' className='text-caption hover:text-white cursor-pointer'/>
                            <RiInstagramLine size={30} color='#858584' className='text-caption'/>
                        </div>
                    </div>
                </Section>
            </div>
            <Footer />
        </div>
    )
}

export default ArtistPage
