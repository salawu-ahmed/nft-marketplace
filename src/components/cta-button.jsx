import React from 'react'

function CtaButton({text, IconComponent}) {
    return (
        <button className='flex items-center gap-2 p-3 rounded-2xl bg-cta'>
            <GoPerson />
            {text}
        </button>
    )
}

export default CtaButton
