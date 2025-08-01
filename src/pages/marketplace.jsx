import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Section from '../components/section'
import NFTcard from '../components/nft-card'
import banner from '../assets/artist-page-banner.png'
import { GoSearch } from 'react-icons/go'

function Marketplace() {
    return (
        <>
            <div className='w-full h-60  relative'>
                {/* <img src={banner} alt="" className='w-full h-full object-cover' /> */}
                <Section >
                    <h2 className='text-5xl mb-4'>Browse Marketplace</h2>
                    <p className='mb-4'>Browse through more than 50k NFTs on the NFT marketplace</p>
                    <div className='w-full h-12 flex items-center px-4 border-1 border-caption rounded-2xl'>
                        <input
                            type="text"
                            placeholder='Search your favorite NFTs'
                            className='bg-transparent text-caption w-full h-full outline-none '
                        />
                        <GoSearch size={25} />
                    </div>
                </Section>
            </div>
            <ul className='container flex mx-auto w-full h-auto px-12 lg:px-24'>
                <li className='flex-1 text-center border-b-4 border-b-caption'>NFTs <span>302</span></li>
                <li className='flex-1 text-center'>NFTs <span>302</span></li>
            </ul>
            <div className='w-full bg-secondaryBackground'>
                <Section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
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
            </div>
            <div className="w-full h-0.5 bg-background"></div>
        </>
    )
}

export default Marketplace
