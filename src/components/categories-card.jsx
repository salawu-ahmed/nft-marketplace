import React from 'react'
import categoryImage from '../assets/categoryImage.png'
import { PiPaintBrush } from 'react-icons/pi'

function CategoryCard() {
    return (
        <div className='rounded-2xl overflow-hidden'>
            <div className='relative'>
                <img src={categoryImage} alt="" />
                <div className='absolute top-0 left-0 w-full h-full backdrop-blur-xl opacity-80 flex items-center justify-center '>
                    {/* in final refactor use images for easier storage in db */}
                    <PiPaintBrush size={100} />
                </div>
            </div>
            <div className='bg-secondaryBackground px-8 py-5'>
                <p className='text-white'>Art</p>
            </div>
        </div>
    )
}

export default CategoryCard
