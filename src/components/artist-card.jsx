import React from 'react'
import avatar from '../assets/artist_avatar.png'

function ArtistCard() {
    return (
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
    )
}

export default ArtistCard
