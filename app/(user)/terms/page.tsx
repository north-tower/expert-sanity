
'use client'


import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "terms"][0]
`;

interface Terms {
  leadText: string;
  terms: string;
  privacy: string;
  user: string;
}


function Page() {
  const [terms, setTerms] = useState<Terms>();

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialTerms = await client.fetch(query);
        console.log("Fetched values:", initialTerms);
        setTerms(initialTerms);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);

  return (
    <div className=''>
    <div className="flex flex-col divide-y divide-gray-200 md:flex-row md:divide-x md:divide-y-0 mx-auto max-w-screen-xl">
    <div className="flex  space-x-2 p-4 text-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <p className="text-gray-600">{terms?.leadText}</p>
    </div>
  
  </div>
  
        <div className="">
  <div className="bg-white">
    <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
      <h2 className="w-full text-3xl font-bold text-blue-500 sm:text-4xl lg:col-span-3">Terms of service</h2>

      <div className="mr-20 text-gray-600 lg:col-span-5">
        <p className="mb-1 font-medium">Summary</p>
        <p className="">{terms?.terms}
</p>
      </div>
      <div className="lg:col-span-2">
        <p className="font-medium">Download</p>
        <a href="#" className="font-medium text-blue-600">.pdf</a>
      </div>
    </section>
  </div>
  <div className="bg-gray-100">
    <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 border-b border-gray-300 px-4 py-10 sm:px-10 lg:grid-cols-10">
      <h2 className="w-full text-3xl font-bold text-blue-500 sm:text-4xl lg:col-span-3">Privacy Policy</h2>

      <div className="mr-20 text-gray-600 lg:col-span-5">
        <p className="mb-1 font-medium">Summary</p>
        <p className="">At our company, we are committed to protecting your privacy and ensuring the security of your personal and financial information. 
         {terms?.privacy}
         </p>
      </div>
      <div className="lg:col-span-2">
        <p className="font-medium">Download</p>
        <a href="#" className="font-medium text-blue-600">.pdf</a>
      </div>
    </section>
  </div>
  <div className="bg-gray-100">
    <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
      <h2 className="w-full text-3xl font-bold text-blue-500 sm:text-4xl lg:col-span-3">User Conduct</h2>

      <div className="mr-20 text-gray-600 lg:col-span-5">
        <p className="mb-1 font-medium">Summary</p>
        <p className="">
{terms?.user}
</p>
      </div>
      <div className="lg:col-span-2">
        <p className="font-medium">Download</p>
        <a href="#" className="font-medium text-blue-600">.pdf</a>
      </div>
    </section>
  </div>
</div>
<section className="relative mx-auto max-w-screen-lg bg-white p-4 text-gray-800">
  <h1 className="mb-20 text-center text-4xl text-blue-500 font-bold">Experience the Future of Bookkeeping</h1>
  <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-12">
    <div className="md:px-20 lg:col-start-2 lg:pr-0">
      <ul className="mt-5">
        <li>
          <div className="flex">
            
            <div className="ml-4">
              <h5 className="text-lg font-bold leading-6 text-gray-900">              Real-Time Data Insights
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
              Gain immediate access to up-to-date financial data and insights, empowering informed decision-making and strategic planning.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10">
          <div className="flex">
          
            <div className="ml-4">
             
              <h5 className="text-lg font-bold leading-6 text-gray-900"> Automated Expense Tracking</h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
              Streamline your expense management with automated tracking and categorization, saving time and ensuring accuracy.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-10">
          <div className="flex">
            
            <div className="ml-4">
              <h5 className="text-lg font-bold leading-6 text-gray-900"> Customizable Financial Reports</h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
             
Tailor-made financial reports that fit your business needs, providing clarity and transparency in your financial performance.


              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="relative mt-10 md:px-20 lg:col-start-1 lg:mt-0 lg:px-0">
      <div className="flex flex-col border border-gray-100 py-20 px-12 shadow-lg">
        <p className="text-3xl font-bold">Try it now</p>
        <p className="mt-3 font-medium">Start the free trial no obligations</p>
        {/* <div className="mt-8 flex flex-col">
          <p className="text-sm text-gray-600">Business Email Address</p>
          <input className="mt-2 border bg-gray-50 py-4 px-4 outline-none ring-blue-300 focus:ring" type="text" name="email" id="email" placeholder="Enter your business email address" />
        </div> */}
        {/* <label  className="mt-6 flex items-center">
          <input className="mr-4 h-6 w-6 accent-blue-600" type="checkbox" name="terms" id="" checked />
          <span className="">I agree to the <a className="font-medium text-blue-500" href="#">Terms and Conditions</a></span></label
        > */}
        <Link href="/contact">
        <button className="mt-10 bg-gradient-to-r from-emerald-300 to-blue-500 px-6 py-3
         text-white outline-none ring-blue-300 focus:ring">Continue</button>
        </Link>

        {/* <p className="mt-6 text-center text-sm">We may use your email in order to:
           verify your identity for security purposes. sell products to you. provide you
            with our services.</p> */}
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Page