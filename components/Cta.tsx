import Link from 'next/link'
import React from 'react'

function Cta() {
  return (
    <div>
        <section className="relative  py-10 text-blue-500 sm:py-16 lg:py-24">
  <div className="mx-auto max-w-xl md:max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
    <div className="text- relative my-auto">
      <div className="-left-12 mb-4 inline-flex h-12 w-12 text-blue-700 xl:absolute">
        <svg viewBox="0 0 136 217" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6632 105.436C27.6632 105.636 24.8632 105.836 21.9632 105.936C17.4632 106.236 12.8632 106.536 8.36322 106.736C7.36322 106.836 6.46322 106.836 5.46322 106.736C1.56322 106.336 -0.636777 103.236 0.163223 99.4361C0.263223 99.0361 0.363223 98.6361 0.563223 98.3361C5.06322 86.5361 8.26322 74.4361 11.2632 62.2361C14.6632 48.7361 18.1632 35.2361 21.6632 21.8361C22.3632 19.2361 23.1632 16.6361 23.8632 14.0361C24.8632 10.5361 26.8632 8.23607 30.6632 7.83607C34.6632 7.43607 38.5632 6.73607 42.5632 6.43607C60.5632 5.33607 78.5632 3.33607 96.4632 1.23607C100.963 0.736068 105.563 0.336068 110.063 0.036068C111.663 -0.063932 113.263 0.036068 114.763 0.436068C118.563 1.33607 120.163 4.93607 118.663 8.43607C118.163 9.53607 117.463 10.5361 116.763 11.5361C114.963 14.3361 113.163 17.0361 111.463 19.8361C106.863 27.6361 102.363 35.4361 97.6632 43.1361C92.9632 50.8361 88.1632 58.5361 83.3632 66.2361C81.9632 68.4361 80.5632 70.5361 79.1632 72.6361C78.7632 73.2361 78.3632 73.9361 77.7632 74.9361C78.7632 74.9361 79.3632 74.9361 79.9632 74.9361C88.2632 75.0361 96.5632 75.0361 104.863 75.1361C105.463 75.1361 106.163 75.2361 106.763 75.3361C110.563 76.1361 112.463 79.6361 111.063 83.2361C110.563 84.5361 109.663 85.7361 108.763 86.8361C104.663 92.2361 100.463 97.5361 96.4632 103.036C94.5632 105.636 92.8632 108.536 91.3632 111.436C83.2632 126.836 75.2632 142.136 67.3632 157.636C59.1632 173.536 51.1632 189.636 43.0632 205.536C42.4632 206.736 41.7632 207.936 40.7632 208.936C38.3632 211.436 35.1632 211.236 32.6632 208.936C30.8632 207.236 29.8632 205.236 29.7632 202.836C29.4632 198.336 29.0632 193.736 29.1632 189.136C29.4632 172.736 30.0632 156.336 30.3632 139.936C30.5632 128.836 30.5632 117.736 30.6632 106.636C30.8632 106.336 30.7632 105.936 30.6632 105.436Z" fill="currentColor" />
        </svg>
      </div>
      <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">Now Free for <span className="whitespace-nowrap">Early Birds</span></h2>
      <p className="mt-4 font-medium md:text-xl">Everyone who signs up before the beta launch, will get 6 months free</p>

      <div className="sm mt-8 flex flex-col sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
        <Link href={"/contact"}>
        <button className="mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">Contact Us</button>

        </Link>
        {/* <button className="mt-4 rounded-lg border-2 border-blue-700 px-6 py-2 font-medium text-blue-700 transition hover:translate-y-1">Choose a Plan</button> */}
      </div>
    </div>
    <div className="mt-8 w-full flex-col space-y-3 rounded-xl px-4 py-4  md:ml-auto md:max-w-md lg:flex">
      <div className="flex rounded-xl bg-white py-2 px-2 text-gray-700 shadow-lg shadow-blue-200">
        <div className="my-auto mr-4 p-3 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div className="">
          <p className="text-2xl font-bold">1420</p>
          <p className="text-sm">Monthly Users</p>
        </div>
      </div>
      <div className="flex rounded-xl bg-white py-2 px-2 text-gray-700 shadow-lg shadow-blue-200">
        <div className="my-auto mr-4 p-3 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <div className="">
          <p className="text-2xl font-bold">100</p>
          <p className="text-sm">Companies</p>
        </div>
      </div>
      <div className="flex rounded-xl bg-white py-2 px-2 text-gray-700 shadow-lg shadow-blue-200">
        <div className="my-auto mr-4 p-3 text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div className="">
          <p className="text-2xl font-bold">240</p>
          <p className="text-sm">Fortune 500 Employed</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Cta