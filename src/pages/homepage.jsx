import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'
import TrendingCollections from '../components/trendingCollection'
import CreatorsSection from '../components/creatorSection'
import Categories from '../components/categories'
import DiscoverNFT from '../components/discoverNFTs'
import icon from '../assets/Icon.png'
import cta_photo from '../assets/cta_photo.png'
import Footer from '../components/footer'
import SectionTitle from '../components/section-title'
import avatar from '../assets/artist_avatar.png'

function HomePage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <TrendingCollections />
            {/* <CreatorsSection /> */}
            {/* CREATOR SECTION */}
            <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
                <SectionTitle
                    title='Top Creators'
                    subtitle='Checkout Top Rated Creators On the NFT Martketplace'
                />

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


                </div>
            </section>
            <Categories />
            <DiscoverNFT />

            {/* HOW IT WORKS SECTION */}
            <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
                <hgroup className='mb-6'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl mb-2'>How It Works</h1>
                    <div>
                        <p>Find Out How To Get Started</p>
                    </div>
                </hgroup>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    {/* card */}
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
                    <div className="flex flex-col items-center bg-secondaryBackground p-4 rounded-lg">
                        <img src={icon} alt="" />
                        <div>
                            <h2 className='text-center'>Setup Your Wallet</h2>
                            <p className="text-center">
                                Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-secondaryBackground p-4 rounded-lg">
                        <img src={icon} alt="" />
                        <div>
                            <h2 className='text-center'>Setup Your Wallet</h2>
                            <p className="text-center">
                                Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                            </p>
                        </div>
                    </div>


                </div>


            </section>

            <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
                <div className="flex flex-col md:flex-row bg-secondaryBackground bg-transparent p-8 md:p-16 gap-10 md:gap-20 rounded-lg">
                    <div className='w-full md:w-1/2 h-72 rounded-lg overflow-hidden'>
                        <img src={cta_photo} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <p className='text-5xl mb-2'>Join our weekly digest</p>
                        <p className='text-2xl mb-8'>Get exclusive promotions & updates straight to your inbox</p>
                        <div className='bg-white'>
                            <input type="email" placeholder='Enter your email here' className='' />
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default HomePage
