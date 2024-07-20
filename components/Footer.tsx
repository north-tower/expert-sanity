import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";


const query = groq`
*[_type == "service"]
`;

interface service {   
    description: string;
    title: string;
  _id: string;

}

function Footer() {
  const [services, setServices] = useState<service[]>([]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialServices = await client.fetch(query);
        console.log("Fetched services:", initialServices);
        setServices(initialServices);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);
  return (
    <div>
     
<footer className="">
  <div className="mx-auto grid text-gray-50 lg:grid-cols-12">
    <div className="flex flex-col items-start border-r border-b border-slate-500 py-8 px-5
     sm:flex-row sm:px-8 md:pt-14 lg:col-span-7 xl:pl-32 2xl:pl-40">
     
      <p className="pt-4 text-sm leading-6 tracking-wide sm:pl-10 sm:pt-0 text-black">Join our
        community and stay informed with the latest updates, tips, and best practices in 
        bookkeeping and financial management. Connect with us to ensure your businesss 
        financial health and growth.</p>
    </div>
    <div className="px-5 py-8 sm:px-8 md:pt-14 lg:col-span-5 xl:pr-32 2xl:pr-40">
      <p className="font-medium text-blue-500">Demo</p>
      <p className="mb-4 mt-4 text-2xl sm:mb-8 sm:text-5xl text-black">Request a Demo</p>
      <div className="flex max-w-lg rounded-full bg-white ring-orange-300 focus-within:ring">
        <Link href="/contact">
        <button className="rounded-full bg-blue-600 p-2 ring-orange-300 focus:ring active:scale-105 
        md:p-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
          stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        </Link>
        
      </div>
    </div>
    <nav aria-label="Footer Navigation" className="text-black flex flex-wrap border-t border-r border-slate-500 
    px-5 pb-10 sm:py-8 sm:px-8 lg:col-span-7 lg:border-t-0 xl:flex-nowrap xl:space-x-16 xl:pl-32 2xl:pl-40">
      <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
        <li className='text-blue-500'><strong>Services</strong></li>
        {services.map((service) => (
  <li key={service._id} className='hover:text-blue-800'>
    <Link href="#">
      {service?.title}
    </Link>
  </li>
))}


       
       
      </ul>
      <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
        <li  className='text-blue-500'><strong>Guides</strong></li>
        <li className=' hover:text-blue-800'>
          <Link href="/values">
          Why Us?
          </Link>
        </li>
        <li  className=' hover:text-blue-800'>
          <Link href="/terms">
          Terms of Service
          </Link>
          </li>
        <li className=' hover:text-blue-800'><Link href="/careers"> Careers </Link> </li>
       
      </ul>
      <ul className="mt-8 mr-4 flex-grow space-y-3 whitespace-nowrap md:mt-0">
        <li className='text-blue-500'><strong>Contact</strong></li>
        <li className=' hover:text-blue-800'><Link href="/contact">Contact</Link></li>
     
      </ul>
     
    </nav>
    <div className="border-t border-slate-500 py-4 lg:col-span-12">
      <p className="text-center text-sm text-gray-400">(2024) North Tower.</p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer