"use client"

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "hero"][0]
`;
 
 
interface hero {
  Title: string;
  Description: string;
}


function Hero() {
  const [hero, setHero] = useState<hero>({Title: '', Description: ''});
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialHero = await client.fetch(query);
        console.log("Fetched hero:", initialHero);
        setHero(initialHero);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);
  return (
    <div className='bg-white'>

<div className="relative">
  <div className="absolute inset-0 bottom-32 -z-10 bg-gradient-to-br from-black to-black"></div>
  <div className="mx-auto flex max-w-screen-md flex-col">
    <h1 className="mt-10 text-center text-3xl font-bold 
    text-blue-500 sm:mt-20 sm:text-5xl">{hero?.Title}</h1>
    <p className="mt-6 text-center text-xl">
    {hero?.Description}
   </p>
   
  </div>

</div>

    </div>
  )
}

export default Hero
