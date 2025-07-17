import React from 'react'
import primaryImage from '../assets/trendingItem_primaryPhoto.png'
import secondaryImage1 from '../assets/trendingItem_secondaryPhoto1.png'
import secondaryImage2 from '../assets/trendingItem_secondaryPhoto2.png'
import avatar from '../assets/trendingItem-avatar.png'

function TrendingCollections() {
    return (
        <div className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
            <hgroup className='mb-6'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl mb-2'>Trending Collections</h1>
                <div>
                    <p>Checkout our weekly updated trending Collections</p>
                </div>
            </hgroup>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div>
                    <div className='mb-4 rounded-2xl overflow-hidden'>
                        <img src={primaryImage} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className='w-1/3 rounded-2xl overflow-hidden'>
                            <img src={secondaryImage1} className='w-full h-full object-contain'  alt="" />
                        </div>
                        <div className='w-1/3 rounded-2xl overflow-hidden'>
                            <img src={secondaryImage2} className='w-full h-full object-contain' alt="" />
                        </div>
                        <div className='w-1/3 h-26 rounded-2xl bg-cta'>
                            <p className='w-full h-full flex items-center justify-center text-white font-bold text-xl'>105+</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl mb-1 font-semibold'>DSGN Animals</h2>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} className='rounded-full w-10 h-10' alt="" />
                            <p>Mr Fox</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='mb-4 rounded-2xl overflow-hidden'>
                        <img src={primaryImage} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className='w-1/3 rounded-2xl overflow-hidden'>
                            <img src={secondaryImage1} className='w-full h-full object-contain'  alt="" />
                        </div>
                        <div className='w-1/3 rounded-2xl overflow-hidden'>
                            <img src={secondaryImage2} className='w-full h-full object-contain' alt="" />
                        </div>
                        <div className='w-1/3 h-26 rounded-2xl bg-cta'>
                            <p className='w-full h-full flex items-center justify-center text-white font-bold text-xl'>105+</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl mb-1 font-semibold'>DSGN Animals</h2>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} className='rounded-full w-10 h-10' alt="" />
                            <p>Mr Fox</p>
                        </div>
                    </div>
                </div>



                <div>
                    <div className='mb-4 rounded-2xl overflow-hidden'>
                        <img src={primaryImage} alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className='w-1/3 h-full rounded-2xl overflow-hidden'>
                            <img src={secondaryImage1} className='w-full h-full object-contain'  alt="" />
                        </div>
                        <div className='w-1/3 h-full rounded-2xl overflow-hidden'>
                            <img src={secondaryImage2} className='w-full h-full object-contain' alt="" />
                        </div>
                        <div className='w-1/3 h-26 rounded-2xl bg-cta'>
                            <p className='w-full h-full flex  items-center justify-center text-white font-bold text-xl'>105+</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl mb-1 font-semibold'>DSGN Animals</h2>
                        <div className='flex items-center gap-2'>
                            <img src={avatar} className='rounded-full w-10 h-10' alt="" />
                            <p>Mr Fox</p>
                        </div>
                    </div>
                </div>

               

            </div>
        </div>
    )
}

export default TrendingCollections
