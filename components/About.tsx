import React from 'react'

function About() {
  return (
    <div className='bg-black'>
        <div className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
  <div className="relative hidden h-screen select-none flex-col justify-center bg-slate-600 text-center md:flex md:w-1/3">
    {/* <img className="mx-auto w-56 max-w-lg rounded-lg object-cover" src="/images/0Vipqj6it1eD-pYG5gPJD.png" /> */}
    <div className="mx-auto py-16 px-8 text-white">
      <p className="my-6 text-4xl text-white font-bold leading-10">Well do the <span className="truncate border-b-8 border-yellow-400 font-bold text-yellow-400">heavy lifting</span></p>
      <p className="mb-4 text-lg font-medium">For your bookkeeping needs, so you can focus on growing your business.</p>
    </div>
  </div>
  <div className="flex w-full flex-col md:w-2/3">
    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
      <a href="#" className="text-2xl font-bold text-gray-800 bg-yellow-400 px-2 py-1">Contact Us </a>
    </div>
    <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
      <p className="text-center text-3xl text-white font-bold md:text-left">For your bookkeeping needs, so you can focus on growing your business.</p>

      <form className="flex flex-col items-stretch pt-3 pb-8 md:pt-8">
        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
          <label className="block" >
            <p className="mb-1 mt-2 text-sm text-white">Name</p>
            <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="text" placeholder="Enter your name" />
          </label>
          <label className="block" >
            <p className="mb-1 mt-2 text-sm text-white">Phone Number</p>
            <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2" type="phone" placeholder="Enter your name" />
          </label>
         
          <label className="block sm:col-span-2">
            <p className="mb-1 mt-2 text-sm text-white">Message</p>
            <textarea className="h-32 w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"  placeholder="Write your special requirements here"></textarea>
          </label>
        </div>
        <div className="block">
          <label className="inline-block text-sm text-white" > By clicking submit you agree to the <a className="underline" href="#">Terms and Conditions</a></label>
        </div>
        <button type="submit" className="mt-6 rounded-full bg-yellow-400 px-4 py-2 text-center text-base font-semibold
         font- shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-400 focus:ring-2 md:w-40">Submit</button>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default About