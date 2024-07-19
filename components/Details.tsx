"use client"

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "details"][0]
`;

interface details {
   
  Description: string;
 
}
 
function Details() {
  const [details, setDetails] = useState<details>({Description: ''});

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialDetails = await client.fetch(query);
        console.log("Fetched details:", initialDetails);
        setDetails(initialDetails);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);
  return (
    <div className="">
        <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
  <div className="max-w-md pr-20 lg:pt-28">
    <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png" 
    alt="" />
  </div>
  <div className="">
    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600
     shadow-lg shadow-blue-600/20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
      stroke="currentColor" className="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    </div>
    <h2 className="mb-10 max-w-lg  text-4xl font-bold leading-snug lg:text-4xl lg:leading-snug">A 
    <span className="text-blue-600"> revolutionary</span> way to handle bookkeeping</h2>
    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-1  text-2xl">
    {details?.Description}
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Details