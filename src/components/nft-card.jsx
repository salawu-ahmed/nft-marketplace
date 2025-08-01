import React from 'react'
import { FaRegEye } from 'react-icons/fa6'
import latest_nft from "../assets/trendingItem_primaryPhoto.png"
import avatar from "../assets/artist_avatar.png"

function NFTcard() {
    return (
        <div className="rounded-lg overflow-hidden bg-background">
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
    )
}

export default NFTcard
