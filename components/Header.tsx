import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold
    px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image 
                className='rounded-full'
                src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
                width={50}
                height={50}
                alt='logo'
                />
            
            </Link>

        </div>

    </header>
  )
}

export default Header