"use client"

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Carousel2 } from "./Carousel2";
import { useEffect, useState } from "react";

const query2 = groq`
*[_type == "landingPage"][0]
`;
 
interface landingPage {
   
    mainTitle: string;
    subTitle: string;
    leadText: string;
   
  }
  
  function Landing() {
    const [landingText, setLandingPage] = useState<landingPage>({mainTitle: '', subTitle: '', leadText: ''});


    useEffect(() => {
        const fetchData2 = async () => {
          try {
            const initialLanding = await client.fetch(query2);
            console.log("Fetched landing:", initialLanding);
            setLandingPage(initialLanding);
            
          } catch (error) {
            console.error("Failed to fetch posts:", error);
          }
        };
    
        fetchData2();
      }, []);

      
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-x-hidden">
        <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 w-full">
          {/* <div className="absolute left-1/2 h-96 w-96 -translate-x-1/2 rounded-full
           border border-gray-500 bg-gradient-to-br from-white/40"></div> */}
  
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mt-5 text-3xl font-light leading-snug
               text-black sm:leading-snug lg:text-5xl lg:leading-snug">
                <span className="p-2">
                  Cultivating <br className="sm:hidden" />
                  Financial Clarity 
                </span>
                <span className="relative inline-flex justify-center whitespace-nowrap font-bold">
                  {" "}
                  Empowering Business <br className="lg:hidden" /> Success
                </span>
              </h1>
              <p className="mx-auto mt-10 max-w-md text-base leading-7 text-black">
               {landingText?.leadText}
              </p>
              <Link href={"/contact"} prefetch={false}>
                <Button variant="secondary" className="mr-4 mt-4 bg-blue-500">Contact Us</Button>
              </Link>
              <Link href={"/services"} prefetch={false}>
                <Button variant="secondary" className="mr-4 mt-4 bg-blue-500">Learn More</Button>
              </Link>
            </div>
          </div>
  
          <div className="mt-16 mb-16 flex flex-col items-center justify-center 
          divide-y divide-gray-500  sm:flex-row sm:divide-x sm:divide-y-0 md:mt-32">
            <span className="text-black p-2">Our Clients</span>
            <Carousel2 />
          </div>
        </section>
      </div>
    );
  }
  
  export default Landing;