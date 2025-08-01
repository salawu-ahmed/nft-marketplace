import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Section from '../components/section'
import NFTcard from '../components/nft-card'
import banner from '../assets/artist-page-banner.png'

function Marketplace() {
    return (
        <>
            <div className='w-full h-80  relative'>
                {/* <img src={banner} alt="" className='w-full h-full object-cover' /> */}
                <div>
                    <h2 className='text-5xl'>Browse Marketplace</h2>
                    <p>Browse through more than 50k NFTs on the NFT marketplace</p>
                    <div>
                        <input type="text" placeholder='Search your favorite NFTs' className='bg-transparent text-caption' />
                    </div>
                </div>
            </div>
            <Section>
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
        </>
    )
}

export default Marketplace
