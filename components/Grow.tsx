import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/sanity.client";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "grow"]
`;

interface grow {   
  Description: string;
  Title: string;
_id: string;

} 

function Grow() {
  const [grow, setGrow] = useState<grow[]>([]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialGrow = await client.fetch(query);
        console.log("Fetched grow:", initialGrow);
        setGrow(initialGrow);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);

  return (
    <div className=''>
        <section className="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
  <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
    <div className="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
    <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
    <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
  </div>
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="sm:text-center">
      <h2 className="text-3xl font-semibold leading-7 text-blue-500  sm:text-4xl xl:text-5xl">
        We are <br className="sm:hidden" />
        growing rapidly
      </h2>
      <p className="text-sm font-medium text-blue-500 pt-1">Insighs and Successes</p>
   
      <hr className="mt-1 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
    </div>

    <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
      
    {grow.map((grow) => (
      
      <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white px-12 py-10 text-left shadow lg:px-12">
        <p className="relative text-2xl font-black text-blue-600">{grow?.Title}</p>
        <p className="relative mt-5 text-gray-600">{grow?.Description}</p>
      </div>
        ))}

     
    </div>
  </div>
</section>

    </div>
  )
}

export default Grow