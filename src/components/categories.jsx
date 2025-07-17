import React from 'react'
import categoryImage from '../assets/categoryImage.png'
import { PiPaintBrush } from 'react-icons/pi'

function Categories() {
    return (
        <div className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
             <h1 className='text-4xl mb-4'>Browse Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <div className='rounded-2xl overflow-hidden'>
                    <div className='relative'>
                        <img src={categoryImage} alt="" />
                        <div className='absolute top-0 left-0 w-full h-full backdrop-blur-xl opacity-80 flex items-center justify-center '>
                            <PiPaintBrush size={100} />
                        </div>
                    </div>
                    <div className='bg-secondaryBackground px-8 py-5'>
                        <p className='text-white'>Art</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
