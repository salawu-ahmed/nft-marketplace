import React from 'react'
import { FaRegEye } from 'react-icons/fa6'
import latest_nft from "../assets/trendingItem_primaryPhoto.png"
import avatar from "../assets/artist_avatar.png"

function DiscoverNFT() {
    return (
        <div className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <hgroup className='mb-6'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl mb-2'>Discover more NFTs</h1>
                <div className='flex items-end justify-between'>
                    <p>Explore new trending NFTs</p>
                    <button className='hidden md:flex items-center gap-2 p-3 rounded-2xl border border-cta'>
                        <FaRegEye className='text-cta' />
                        See All
                    </button>
                </div>
            </hgroup>

            <div className="flex flex-col lg:flex-row justify-between gap-4">


                <div className="rounded-lg overflow-hidden bg-secondaryBackground">
                    <img src={latest_nft} alt="" />
                    <div className='p-4'>
                        <p>Distant Galaxy</p>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img src={avatar} alt="" />
                            </div>
                            <p>MoonDancer</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-caption'>Price</p>
                                <p>1.63 ETH</p>
                            </div>
                            <div>
                                <p className='text-caption'>Highest Bid</p>
                                <p>0.33 wETH</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="rounded-lg overflow-hidden bg-secondaryBackground">
                    <img src={latest_nft} alt="" />
                    <div className='p-4'>
                        <p>Distant Galaxy</p>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img src={avatar} alt="" />
                            </div>
                            <p>MoonDancer</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-caption'>Price</p>
                                <p>1.63 ETH</p>
                            </div>
                            <div>
                                <p className='text-caption'>Highest Bid</p>
                                <p>0.33 wETH</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="rounded-lg overflow-hidden bg-secondaryBackground">
                    <img src={latest_nft} alt="" />
                    <div className='p-4'>
                        <p>Distant Galaxy</p>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img src={avatar} alt="" />
                            </div>
                            <p>MoonDancer</p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-caption'>Price</p>
                                <p>1.63 ETH</p>
                            </div>
                            <div>
                                <p className='text-caption'>Highest Bid</p>
                                <p>0.33 wETH</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default DiscoverNFT
