'use client'

import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='p-4'>
      <nav>
        <Image src={'/logo.svg'} width={125} height={125} alt='Logo goes here'/>
      </nav>
    </div>
  )
}

export default Home