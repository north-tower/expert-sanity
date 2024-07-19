import React from 'react'

function Hero() {
  return (
    <div className='bg-white'>

<div className="relative">
  <div className="absolute inset-0 bottom-32 -z-10 bg-gradient-to-br from-black to-black"></div>
  <div className="mx-auto flex max-w-screen-md flex-col">
    <h1 className="mt-10 text-center text-3xl font-bold text-blue-500 sm:mt-20 sm:text-5xl">Your go to Partner</h1>
    <p className="mt-6 text-center text-xl">Welcome to Procounts Kenya, the ultimate solution for seamless and efficient bookkeeping tailored 
    to meet the needs of modern businesses. Whether youre a small business owner, a freelancer, 
    or an accountant, our app is designed to 
    simplify your financial management processes, giving you more time to focus on what you do 
    best—growing your business.</p>
   
  </div>
  <img className="mx-auto mt-16 w-full max-w-screen-lg rounded-xl shadow-lg shadow-indigo-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="" />
</div>

    </div>
  )
}

export default Hero