import Link from 'next/link'
import React from 'react'

function Serve() {
  return (
    <div >
        <section className="py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-7xl px-4 md:px-8"> 
    
    <div className="mb-10 md:mb-16">
      <p className="mx-auto max-w-screen-md text-center text-blue-500 text-xl font-bold underline underline-offset-1">Who we serve.</p>

      <h2 className="mb-4 text-center text-xl  text-gray-500  md:mb-6 lg:text-xl">
        Whether you are a small business owner, a freelancer, or part of a 
        larger organization, our solutions are designed to meet your unique financial needs. We proudly serve a diverse range of professionals and businesses, 
        including:</h2>

    </div>

    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16">
   
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        {/* <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a> */}

        <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-blue-500">
            <a href="#" className="transition duration-100 hover:text-blue-800 ">Small Business Owners</a>
          </h2>
          {/* <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Pines and the Mountains</a>
          </h2> */}

          <p className="text-gray-500 text-sm">Streamline your finances and focus on growing your business.</p>

          <div>
            <Link href="/blog">
            <p  className="font-semibold text-blue-500 transition duration-100 
            hover:text-blue-800 active:text-rose-700">Read more</p>
            
            </Link>
          </div>
        </div>
      </article>
      
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        {/* <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a> */}

        <div className="flex flex-col gap-2">
         

          <h2 className="text-xl font-bold text-blue-500">
            <a href="#" className="transition duration-100 hover:text-blue-800 ">Freelancers and Consultants</a>
          </h2>

          <p className="text-gray-500 text-sm">Keep your projects profitable with easy expense tracking and invoicing.</p>

          <div>
          <Link href="/blog">
            <p  className="font-semibold text-blue-500 transition duration-100 
            hover:text-blue-800 active:text-rose-700">Read more</p>
            
            </Link>
          </div>
        </div>
      </article>
     
      <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        {/* <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a> */}

        <div className="flex flex-col gap-2">
          {/* <span className="text-sm text-gray-400">April 2, 2022</span> */}

          <h2 className="text-xl font-bold text-blue-500">
            <a href="#" className="transition duration-100 hover:text-blue-800 text-blue-500">Real Estate Professionals</a>
          </h2>

          <p className="text-gray-500">Simplify property management and track your investments with ease.
          </p>

          <div>
          <Link href="/blog">
            <p  className="font-semibold text-blue-500 transition duration-100 
            hover:text-blue-800 active:text-rose-700">Read more</p>
            
            </Link>
          </div>
        </div>
      </article>
      
    
   
    </div>
  </div>
</section>

    </div>
  )
}

export default Serve