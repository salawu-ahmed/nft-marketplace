import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'
import TrendingCollections from '../components/trendingCollection'
import CreatorsSection from '../components/creatorSection'
import Categories from '../components/categories'

function HomePage() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <TrendingCollections />
            <CreatorsSection />
            <Categories />
        </div>
    )
}

export default HomePage
