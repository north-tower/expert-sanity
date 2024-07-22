import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <p className="text-center font-bold text-blue-500 md:text-left">Who we are</p>

                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Operational since 1967</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
               

Operational since 1967, our bookkeeping firm has been a trusted partner for businesses across various industries. With over five decades of experience, we have honed our expertise in financial management, offering tailored solutions that meet the unique needs of our clients. Our long-standing commitment to excellence and integrity has earned us a reputation for reliability and precision. As we continue to evolve with the latest industry advancements, our focus remains on delivering exceptional service and empowering businesses to achieve their financial goals.
                   
                   </p>
            </div>
            <div>
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
                </div>
            </div>
            <div className="md:col-span-2">
                <h2 className="mb-2 text-center text-xl font-semibold text-blue-500 sm:text-2xl 
                md:mb-4 md:text-left">About us</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">

At Procounts Kenya, we are dedicated to providing exceptional bookkeeping services tailored to the unique needs of each client. With a rich history dating back to 1967, our team of experienced professionals combines deep industry knowledge with cutting-edge technology to ensure accurate, efficient, and compliant financial management. We understand the complexities of running a business, which is why we offer a comprehensive range of services, from expense and income tracking to financial forecasting and reporting. Our mission is to alleviate the burden of financial administration, allowing you to focus on what you do best—growing your business. Trust us to be your reliable partner in achieving financial clarity and success..</p>
            </div>
            </div>
        </div>  
        </div>
        <section className="w-screen bg-white py-10 text-gray-800">
  <div className="container mx-auto w-full max-w-screen-xl">
    <div className="w-full"> 
      <h2 className="text-center text-3xl font-extrabold text-blue-500">Our Values</h2>
      <p className="mx-auto mb-4 max-w-xl py-2 text-center text-gray-600 sm:text-lg">
      At Procounts Kenya our values are the foundation of everything we do. 
      We are committed to delivering excellence, fostering trust, and driving innovation to 
      provide the best bookkeeping services for our clients.
        
        </p>
    </div>
    <div className="flex flex-col lg:flex-row">
      <div className="w-full p-4 text-left lg:w-1/3">
        <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 className="font-sans text-4xl font-light leading-10">ACCURACY.</h3>
        <p className="my-5 text-gray-600"> 
        We prioritize precision in all our financial records and reporting, ensuring that your business data is reliable and trustworthy. Our meticulous approach to bookkeeping eliminates errors and supports sound financial decision-making.
            
            </p>
      </div>
      <div className="w-full p-4 text-left lg:w-1/3">
        <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 className="font-sans text-4xl font-light leading-10">INTEGRITY.</h3>
        <p className="my-5 text-gray-600">
        We uphold the highest standards of integrity in all our interactions and transactions. Our transparent practices and ethical principles build lasting relationships based on trust and respect, providing you with peace of mind..</p>
      </div>
      <div className="w-full p-4 text-left lg:w-1/3">
        <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
        <h3 className="font-sans text-4xl font-light leading-10">INNOVATION.</h3>
        <p className="my-5 text-gray-600">
        We leverage the latest technology and innovative practices to enhance our bookkeeping services. By staying ahead of industry trends, we offer efficient, effective, and modern solutions tailored to your business needs.
        </p>
      </div>
    </div>
  </div>
</section>



<section className="bg-white py-12 text-gray-900 sm:py-16 lg:py-20">
  <div className="mx-auto max-w-screen-lg sm:px-6 lg:px-8">
    <div className="mx-auto text-center">
      <h2 className="capital text-3xl font-bold sm:text-4xl xl:text-4xl">Learn how we can transform your business</h2>
    </div>

    <div className="mx-auto mt-8 max-w-lg overflow-hidden  sm:mt-12 md:max-w-4xl lg:mt-16">
      <div className="relative px-6 pb-12 md:px-8 md:py-10 lg:py-12">
        {/* <div className="top-0 md:absolute">
          <img className="w-full md:max-w-xs" src="/images/ycltIS1VMbdCGjzz3nt97.png" alt="" />
        </div> */}

        <div className="flex items-center md:order-2">
          <div className="relative text-center md:pl-8   lg:pl-0">
            <p className="text-lg font-normal">Transform your business today with our expert bookkeeping solutions. Lets drive efficiency, 
              accuracy, and growth together.

            </p>
            {/* <!-- <button className="bg-white px-6 py-2 rounded-lg mt-4 font-bold hover:translate-y-1 transition">Get in Touch</button>  */}
            {/* <!-- <button className="bg-gradient-to-r from-orange-500 to-blue-700 text-white px-6 py-2 rounded-lg mt-4 font-bold hover:translate-y-1 transition">Get in Touch</button> --> */}
          
          <Link href={"/contact"}>
          <button className="mt-4 rounded-lg bg-blue-600 px-6 py-2 font-bold 
          text-white transition hover:translate-y-1">Get Started Now!</button>
          
          </Link>
            {/* <!-- <button className="bg-orange-600 text-white px-6 py-2 rounded-lg mt-4 font-bold hover:translate-y-1 transition">Get in Touch</button> --> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default page