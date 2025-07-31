import React from 'react'
import icon from '../assets/Icon.png'

function InfoCard() {
    return (
        <div className="flex gap-4 md:flex-col items-center bg-secondaryBackground p-4 rounded-lg">
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <h2 className='md:text-center'>Setup Your Wallet</h2>
                <p className="md:text-center">
                    Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                </p>
            </div>
        </div>
    )
}

export default InfoCard
