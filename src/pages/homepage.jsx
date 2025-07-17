import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'
import TrendingCollections from '../components/trendingCollection'

function HomePage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <TrendingCollections />
        </div>
    )
}

export default HomePage
