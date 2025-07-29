import React from 'react'
import { PiRocketLaunch } from 'react-icons/pi'

function SectionTitle({title, subtitle}) {
    return (
        <hgroup className='mb-6'>
            <h1 className='text-4xl'>{title}</h1>
            <div className='flex items-end justify-between'>
                <p>{subtitle}</p>
                <button className='hidden md:flex items-center gap-2 p-3 rounded-2xl border border-cta'>
                    <PiRocketLaunch className='text-cta' />
                    View Rankings
                </button>
            </div>
        </hgroup>
    )
}

export default SectionTitle
