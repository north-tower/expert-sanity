import Link from 'next/link'
import React from 'react'

function Tail() {
  return (
    <div className=''>
        <div className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
  <div className="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
    <div className="mb-5 text-4xl font-bold text-blue-600">Financial Company With a an Edge. Innovation.</div>
    <div className="mb-5 text-xl">As a business owner myself, I understand the 
      challenges of keeping track of expenses and income. Thats 
    why we created our company—to provide a comprehensive, user-friendly platform that makes
     bookkeeping effortless and accurate. Our goal is to empower businesses to manage their
      finances with confidence and ease.</div>
    
  </div>
  <div className="mr-10 mb-6 lg:mb-0">
    {/* <img src="/images/Rs9HCLrp_0y7g8Zp8h8p9.png" className="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg" /> */}
    <div className="p-4">
      <p className="mb-1 font-medium uppercase text-blue-600">Who we are</p>
      <h5 className="text-xl">Whether youre a small business owner, a freelancer, or an accountant, our app is
       designed to simplify your financial management processes, giving you more time to focus on what you do best—growing your business.</h5>
      <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
        <Link href="/values">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
        stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        </Link>
        
        
      </div>
    </div>
  </div>
  <div className="">
    
    <div className="p-4">
      <p className="mb-1 font-medium uppercase text-blue-600">Our Practices</p>
      <h5 className=" text-xl">Our commitment to excellence is reflected 
        in every aspect of our company. 
      We focus on providing intuitive features and top-notch security so that businesses 
      can manage their finances with confidence. At Procounts Kenya,
       were not just offering a service; were offering peace of mind and the 
       foundation for smarter business growth.</h5>
      <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
      <Link href="/terms">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
        stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Tail