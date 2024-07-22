'use client'


import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "career"][0]
`;

interface Benefits {
  benefit1: string;
  benefit2: string;
  benefit3: string;
  description: string;
}

interface Career {
  leadText: string;
  description: string;
  benefits: Benefits;
}

function Page() {
  const [career, setCareer] = useState<Career>();

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialCareer = await client.fetch(query);
        console.log("Fetched career:", initialCareer);
        setCareer(initialCareer);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);

  return (
    <div className=''>
      <section className="relative py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex h-12 w-12 text-blue-700">
              <svg viewBox="0 0 136 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6632 105.436C27.6632 105.636 24.8632 105.836 21.9632 105.936C17.4632 106.236 12.8632 106.536 8.36322 106.736C7.36322 106.836 6.46322 106.836 5.46322 106.736C1.56322 106.336 -0.636777 103.236 0.163223 99.4361C0.263223 99.0361 0.363223 98.6361 0.563223 98.3361C5.06322 86.5361 8.26322 74.4361 11.2632 62.2361C14.6632 48.7361 18.1632 35.2361 21.6632 21.8361C22.3632 19.2361 23.1632 16.6361 23.8632 14.0361C24.8632 10.5361 26.8632 8.23607 30.6632 7.83607C34.6632 7.43607 38.5632 6.73607 42.5632 6.43607C60.5632 5.33607 78.5632 3.33607 96.4632 1.23607C100.963 0.736068 105.563 0.336068 110.063 0.036068C111.663 -0.063932 113.263 0.036068 114.763 0.436068C118.563 1.33607 120.163 4.93607 118.663 8.43607C118.163 9.53607 117.463 10.5361 116.763 11.5361C114.963 14.3361 113.163 17.0361 111.463 19.8361C106.863 27.6361 102.363 35.4361 97.6632 43.1361C92.9632 50.8361 88.1632 58.5361 83.3632 66.2361C81.9632 68.4361 80.5632 70.5361 79.1632 72.6361C78.7632 73.2361 78.3632 73.9361 77.7632 74.9361C78.7632 74.9361 79.3632 74.9361 79.9632 74.9361C88.2632 75.0361 96.5632 75.0361 104.863 75.1361C105.463 75.1361 106.163 75.2361 106.763 75.3361C110.563 76.1361 112.463 79.6361 111.063 83.2361C110.563 84.5361 109.663 85.7361 108.763 86.8361C104.663 92.2361 100.463 97.5361 96.4632 103.036C94.5632 105.636 92.8632 108.536 91.3632 111.436C83.2632 126.836 75.2632 142.136 67.3632 157.636C59.1632 173.536 51.1632 189.636 43.0632 205.536C42.4632 206.736 41.7632 207.936 40.7632 208.936C38.3632 211.436 35.1632 211.236 32.6632 208.936C30.8632 207.236 29.8632 205.236 29.7632 202.836C29.4632 198.336 29.0632 193.736 29.1632 189.136C29.4632 172.736 30.0632 156.336 30.3632 139.936C30.5632 128.836 30.5632 117.736 30.6632 106.636C30.8632 106.336 30.7632 105.936 30.6632 105.436Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl text-blue-500 lg:text-5xl">Welcome to your new career</h2>
            <p className="mt-4 text-xl font-medium">Start enjoying your job. Experience the respect and recognition you deserve.</p>
          </div>
        </div>
      </section>
        <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border-blue-300 px-4 py-10 text-gray-700 sm:border-8
         sm:px-10 lg:max-w-screen-lg lg:flex-row ">
  <div className="mr-2">
    <h2 className="mb-4 text-4xl font-medium ">We work hard<span className="text-blue-600"> and play hard</span></h2>
    <p className="mb-6 ">
{career?.description}
</p>
    <div className="mb-4 space-y-4">
            <div className="flex space-x-2">
              <span className="text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875s2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.266.611.598.643 1.738.168 3.504.22 5.285.153a48.64 48.64 0 00-.268-5.234.64.64 0 00-.532-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.642 48.642 0 00-.345-5.051c-1.678.282-3.384.474-5.11.57a.64.64 0 01-.643-.598z" />
                </svg>
              </span>
              <p className="font-medium">Possibility to advance your career</p>
            </div>
            <div className="flex space-x-2">
              <span className="text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25M3.75 14.25v6c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-6m6.75-9v11.25m0 0v6c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125v-6m-15.75 0h15.75" />
                </svg>
              </span>
              <p className="font-medium">Advancement</p>
            </div>
          </div>
          <Link href="/contact">
            <button type="button" className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700">
              Get started today
            </button>
          </Link>
  </div>
  
</section>


        <section className="">
  <div className="mx-auto max-w-xl px-4 py-10  lg:max-w-screen-lg">
    <h2 className="mb-8 text-3xl font-bold  text-blue-500 lg:mb-20 lg:text-center lg:text-5xl">
      Employee Benefits</h2>
    <div className="flex flex-col lg:flex-row">
      <div className="self-center pr-5 lg:w-1/2">
        <p className="mb-4 text-base">
          {career?.benefits.description}
</p>
        {/* <p className="mb-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et maiores ex numquam repellat? Iure, illum illo nisi explicabo deleniti amet sapiente repudiandae blanditiis ullam esse nostrum neque eveniet impedit nesciunt, sint inventore reprehenderit cumque! Vero dolor facere cumque ad.</p> */}
        <hr className="mt-8 h-2 w-20 transform border-none bg-blue-200" />
      </div>
      <div className="mt-8 grid flex-wrap gap-y-8 sm:grid-cols-2 lg:mt-0 lg:ml-4 lg:w-1/2 lg:gap-y-10">
      
      {career?.benefits && (
        <>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-500">
           
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
             height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
              <circle cx="221.912" cy="66.088" r="34.088" fill="currentColor" />
              <path fill="currentColor" d="m460.12 360.478l-47.943 11.985L393 282.971A24.126 24.126 0 0 0 369.533 264h-88.705l-6.462-56H384v-32H270.674l-4.134-35.826a24 24 0 0 0-26.593-21.091l-39.736 4.585L220.1 296h142.97l24.758 115.537l80.057-20.015Z" />
              <path fill="currentColor" d="M224 448a120 120 0 0 1-45.248-231.135l-3.779-32.75C115.143 204.558 72 261.334 72 328c0 83.813 68.187 152 152 152a152.06 152.06 0 0 0 130.044-73.378L344 360c-16 48-61.4 88-120 88Z" />
            </svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">{career.benefits.benefit1}</p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-500">
           
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v16h-2V10a1 1 0 0 0-1-1h-3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3h-3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h10v2H14a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h3Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm3 10v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm1 13.665v4a1 1 0 0 0 1 1h4v-2h-1.475l1.253-1.178a5 5 0 0 1 8.273 1.845l1.885-.667a7.001 7.001 0 0 0-11.538-2.625L26 31.353v-1.688h-2Zm11.667 5.667h4a1 1 0 0 1 1 1v4h-2v-1.688l-1.398 1.313a7 7 0 0 1-11.538-2.625l1.885-.667a5 5 0 0 0 8.273 1.845l1.253-1.178h-1.475v-2Z" clip-rule="evenodd" /></svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">{career.benefits.benefit2}</p>
        </div>
    

        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-500">
         
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z" />
              <path fill="currentColor" d="M19 14c-1.654 0-3 1.346-3 3c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z" />
            </svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">{career.benefits.benefit3}</p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-500">
        
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
              <circle cx="221.912" cy="66.088" r="34.088" fill="currentColor" />
              <path fill="currentColor" d="m460.12 360.478l-47.943 11.985L393 282.971A24.126 24.126 0 0 0 369.533 264h-88.705l-6.462-56H384v-32H270.674l-4.134-35.826a24 24 0 0 0-26.593-21.091l-39.736 4.585L220.1 296h142.97l24.758 115.537l80.057-20.015Z" />
              <path fill="currentColor" d="M224 448a120 120 0 0 1-45.248-231.135l-3.779-32.75C115.143 204.558 72 261.334 72 328c0 83.813 68.187 152 152 152a152.06 152.06 0 0 0 130.044-73.378L344 360c-16 48-61.4 88-120 88Z" />
            </svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">Recognition & Rewards</p>
        </div>

        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-800">
          
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z" />
              <path fill="currentColor" d="M19 14c-1.654 0-3 1.346-3 3c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z" />
            </svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">401(k) Matching</p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 rounded-full bg-blue-100 p-6 text-7xl text-blue-800">
          
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v16h-2V10a1 1 0 0 0-1-1h-3a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3h-3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h10v2H14a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h3Zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8Zm3 10v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm1 13.665v4a1 1 0 0 0 1 1h4v-2h-1.475l1.253-1.178a5 5 0 0 1 8.273 1.845l1.885-.667a7.001 7.001 0 0 0-11.538-2.625L26 31.353v-1.688h-2Zm11.667 5.667h4a1 1 0 0 1 1 1v4h-2v-1.688l-1.398 1.313a7 7 0 0 1-11.538-2.625l1.885-.667a5 5 0 0 0 8.273 1.845l1.253-1.178h-1.475v-2Z" clip-rule="evenodd" /></svg>
          </div>
          <p className="mb-2 text-base font-medium text-gray-600">Regular Checkups</p>
        </div>
        </>
        )}
      </div>
    </div>
  </div>
</section>

<div className="mx-auto my-10 flex max-w-xl flex-col rounded-2xl border bg-gray-300 px-4 py-4 shadow-lg sm:max-w-lg sm:flex-row">
  <div className="sm:mr-6">
    <img className="h-[13rem] w-full rounded-2xl object-cover sm:w-56" 
    src="https://images.unsplash.com/photo-1663275164457-ee8ae128eeb2?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=60" alt="" />
  </div>
  <div className="py-8 pr-8">
    <p className="text-xl font-medium text-white">Subscribe to Newsletter</p>
    <p className="mb-4 text-white">Never miss any updates</p>
    <div className="flex">
      <div className="mr-1 w-full">
        <input type="email" className="placeholder:text-gray-400 h-12 w-full bg-black
        rounded-md bg-gray-200 px-4 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
      </div>
      <button className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Page