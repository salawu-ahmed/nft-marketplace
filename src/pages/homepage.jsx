import React from 'react'
import Navbar from '../components/navbar'
import cta_photo from '../assets/cta_photo.png'
import Footer from '../components/footer'
import SectionTitle from '../components/section-title'
import { PiRocketLaunch } from 'react-icons/pi'
import heroImage from '../assets/heroSection_image.png'
import avatar from '../assets/heroSection_avatar.png'
import Button from '../components/button'
import CollectionsCard from '../components/collections-card'
import ArtistCard from '../components/artist-card'
import CategoryCard from '../components/categories-card'
import InfoCard from '../components/info-card'
import NFTcard from '../components/nft-card'
import { FaRegEye } from 'react-icons/fa6'
import Section from '../components/section'
// import avatar from '../assets/trendingItem-avatar.png'

function HomePage() {
    return (
        <div>
            <Navbar />

            {/* HERO SECTION */}
            <section className='container mx-auto h-auto flex flex-col gap-y-6 md:flex-row md:justify-between md:gap-x-12 md:gap-y-0 py-7 px-12 lg:py-14  ' >
                <div className='w-full md:w-1/2 mb-3 md:mb-0 flex-1 '>
                    <h1 className='text-3xl md:text-4xl lg:text-7xl mb-4'>Discover Digital Art & Collect NFTs</h1>
                    <p className='text-l md:text-xl lg:text-2xl mb-4'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    <Button type='filled' icon={PiRocketLaunch} buttonText='Get Started' size='large' />
                    <ul className='hidden md:flex items-center justify-between'>
                        <li>
                            <p className='text-xl lg:text-3xl'>240k+</p>
                            <p>Total Sales</p>
                        </li>
                        <li>
                            <p className='text-xl lg:text-3xl'>100k+</p>
                            <p>Auctions</p>
                        </li>
                        <li>
                            <p className='text-xl lg:text-3xl'>240k+</p>
                            <p>Artists</p>
                        </li>
                    </ul>
                </div>


                <div className='w-full md:w-1/2 lg:w-2/5 rounded-xl overflow-hidden flex-1'>
                    <div className='w-full h-4/5'>
                        <img src={heroImage} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='h-full flex flex-col bg-secondaryBackground gap-2 p-4 md:p-2 lg:p-5'>
                        <p>Space Walking</p>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 rounded-full relative'>
                                <img src={avatar} alt="" className='w-full h-full object-fill rounded-full' />
                            </div>
                            <p>Animakid</p>
                        </div>
                    </div>
                </div>

                {/* mobile view */}
                <div className='w-full flex flex-col space-y-6 md:hidden'>
                    <button className='w-full flex justify-center md:hidden items-center gap-2 p-3 rounded-2xl bg-cta'>
                        <PiRocketLaunch />
                        Get Started
                    </button>
                    <ul className='w-full flex gap-2 md:hidden items-center justify-between'>
                        <li>
                            <p className='text-xl font-semibold sm:text-xl'>240k+</p>
                            <p className='text-xs'>Total Sales</p>
                        </li>
                        <li>
                            <p className='text-xl font-semibold sm:text-xl'>100k+</p>
                            <p className='text-xs'>Auctions</p>
                        </li>
                        <li>
                            <p className='text-xl font-semibold sm:text-xl'>240k+</p>
                            <p className='text-xs'>Artists</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* trending collections */}
            <Section>
                <SectionTitle
                    title='Trending Collections'
                    subtitle='Checkout our weekly updated trending collections'
                    button={false}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <CollectionsCard />
                    <CollectionsCard />
                    <CollectionsCard />
                </div>
            </Section>


            {/* CREATOR SECTION */}
            <Section>
                <SectionTitle
                    title='Top Creators'
                    subtitle='Checkout Top Rated Creators On the NFT Martketplace'
                    button={true}
                    buttonText='See rankings'
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-4 lg:gap-x-12 lg:gap-y-8">
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </div>
            </Section>

            {/* CATEGORIES SECTION */}
            <Section>
                <SectionTitle
                    title='Browse Categories'
                    subtitle='Browse NFTs across different industries'
                />
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </Section>


            {/* DISCOVER NFTs */}
            <Section>
                <SectionTitle
                    title='Browse Categories'
                    subtitle='Browse NFTs across different industries'
                    icon={FaRegEye}
                    buttonText='See All'
                    button={true}
                />
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <NFTcard />
                    <NFTcard />
                    <NFTcard />
                </div>
            </Section>


            {/* HOW IT WORKS SECTION */}
            <Section>
                <SectionTitle
                    title='How It Works'
                    subtitle='Find Out How To Get Started'
                    button={false}
                />
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    {/* card */}
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </div>
            </Section>

            <Section>
                <div className="flex flex-col md:flex-row md:bg-secondaryBackground bg-transparent p-8 md:p-16 gap-10 md:gap-20 rounded-lg">
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
            </Section>

            <Footer />
        </div>
    )
}

export default HomePage
