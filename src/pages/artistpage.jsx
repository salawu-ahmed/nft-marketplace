import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router'
import Section from '../components/section'
import Button from '../components/button'
import { RiDiscordLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import banner from '../assets/artist-page-banner.png'
import NFTcard from '../components/nft-card'
import artistAvatar from '../assets/artist_avatar.png'

function ArtistPage() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-80  relative'>
                <img src={banner} alt="" className='w-full h-full object-cover' />
            </div>
            <Section>
                <div className='w-full flex flex-col md:flex-row md:justify-between relative'>
                    <div className='w-26 h-26 border-2 border-background rounded-2xl absolute -top-28 overflow-hidden'>
                        <img src={artistAvatar} alt="" className='w-full h-full object-contain' />
                    </div>
                    <h2>Animakid</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div>
                            <Button type='outline' buttonText='Copy ID'/>
                        </div>
                        <div>
                            <Button type='filled' buttonText='Follow'/>
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
                        <PiYoutubeLogoLight size={30} color='#858584' className='text-caption' />
                        <RiTwitterXLine size={30} color='#858584' className='text-caption hover:text-white cursor-pointer' />
                        <RiInstagramLine size={30} color='#858584' className='text-caption' />
                    </div>
                </div>

            </Section>
            <Section>
                <div className='w-full flex'>
                    <button className="flex-1 text-center">Created <span className='bg-secondaryBackground rounded-full p-2'>302</span></button>
                    <button className="flex-1 text-center">Owned <span className='bg-secondaryBackground rounded-full p-2'>87</span></button>
                    <button className="flex-1 text-center">Collection <span className='bg-secondaryBackground rounded-full p-2'>4</span></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                </div>
            </Section>
            <Footer />
        </div>
    )
}

export default ArtistPage
