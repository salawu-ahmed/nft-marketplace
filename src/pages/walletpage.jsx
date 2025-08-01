import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import connectWallet from '../assets/connect-wallet.png'

function WalletPage() {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center gap-16'>
                <div className='flex-1'>
                    <img src={connectWallet} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl md:text-5xl'>Create Wallet</h1>
                    <p>Choose a wallet you want to connect. There are several wallet providers.</p>
                    <div>
                        <div>
                            <input type="text" placeholder='Username' />
                        </div>
                        <div>
                            <input type="email" placeholder='Email Address' />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage
