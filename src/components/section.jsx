import React from 'react'

function Section({children}) {
  return (
    <section className='container mx-auto w-full h-auto py-7 px-12 lg:py-14 lg:px-24'>
      {children}
    </section>
  )
}

export default Section
