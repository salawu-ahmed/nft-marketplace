import React from 'react'
import { PiRocketLaunch } from 'react-icons/pi'

function SectionTitle({ title, subtitle, icon: Icon, button, buttonText }) {
    return (
        <div className='flex items-end justify-between mb-8'>
            <hgroup>
                <h1 className='text-4xl mb-2'>{title}</h1>
                <p>{subtitle}</p>
            </hgroup>
            {
                button && (
                    <button className='hidden md:flex items-center gap-2 p-3 rounded-2xl border border-cta'>
                        {Icon && <Icon className='text-cta' />}
                        {buttonText}
                    </button>
                )
            }
        </div>
    )
}

export default SectionTitle
