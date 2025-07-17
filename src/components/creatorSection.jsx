import React from 'react'
import { PiRocketLaunch } from 'react-icons/pi'
import avatar from '../assets/artist_avatar.png'

function CreatorsSection() {
    return (
        <div className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <hgroup className='mb-6'>
                <h1 className='text-4xl'>Top Creators</h1>
                <div className='flex items-end justify-between'>
                    <p>Checkout Top Rated Creators On the NFT Martketplace</p>
                    <button className='hidden md:flex items-center gap-2 p-3 rounded-2xl border border-cta'>
                        <PiRocketLaunch className='text-cta' />
                        View Rankings
                    </button>
                </div>
            </hgroup>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-4 lg:grid-rows-3 lg:gap-x-12 lg:gap-y-8">

                <div className='bg-secondaryBackground flex lg:flex-col items-center justify-between lg:justify-center gap-4 p-4 rounded-2xl relative'>
                    <div className='w-15 h-15 lg:w-20 lg:h-20 rounded-full overflow-hidden'>
                        <img src={avatar} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='flex flex-1 flex-col lg:items-center lg:justify-center gap-0.5'>
                        <p>Keepitreal</p>
                        <p className='text-xs sm:text-lg'><span className='text-label'>Total Sales:</span> 34.5 ETH</p>
                    </div>
                    <div className='w-6 h-6 absolute top-8 left-8 rounded-full bg-background flex items-center justify-center'>
                        <p className='text-label'>1</p>
                    </div>
                </div>



                <div className='bg-secondaryBackground flex flex-col items-center justify-center gap-4 p-8 rounded-2xl relative'>
                    <div className='w-20 h-20 rounded-full overflow-hidden'>
                        <img src={avatar} alt="" className='w-full h-full object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-0.5'>
                        <p>Keepitreal</p>
                        <p><span className='text-label'>Total Sales:</span> 34.5 ETH</p>
                    </div>
                    <div className='w-6 h-6 absolute top-8 left-8 rounded-full bg-background flex items-center justify-center'>
                        <p className='text-label'>1</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CreatorsSection
