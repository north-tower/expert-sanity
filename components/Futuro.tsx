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
   
function Futuro() {
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
    <div className=''>
      

<section className="mx-auto max-w-screen-xl py-12  sm:py-16 lg:py-4">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center ">
      <p className="text-sm font-medium ">INTRODUCING</p>
      <h2 className="mt-2 text-3xl font-bold text-blue-500 sm:text-4xl xl:text-5xl">Our Finance as a Service Solution</h2>
      <hr className="mx-auto mt-4 h-2 w-32 border-none bg-blue-700" />
    </div>

    <div className="grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-2 md:text-left">
      
    {services.map((service) => (
      <div className="" key={service._id}>
  
       <div className="p-8 bg-white shadow-md rounded-lg">
            <h3 className="text-4xl font-bold text-blue-500">{service?.title}</h3>
            <p className="mt-6 text-base text-gray-500">
                <span className="block mb-2">
                    <strong>
                        {service?.description}
.                   </strong>
                </span>
    {/* <span className="block mb-2"><strong>Income Tracking:</strong> Accurately record and categorize business income for precise financial management.</span>
    <span className="block mb-2"><strong>Invoices and Receipts:</strong> Seamlessly create, manage, and upload or scan invoices and receipts.</span>
    <span className="block"><strong>Financial Reports:</strong> Generate comprehensive financial reports, including profit and loss, balance sheet, and cash flow statements.</span> */}
            </p>
            <Link href={"/services"}>
                <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition transform hover:-translate-y-1">
                    Learn More
                </button>
            
            </Link>
        </div>




      </div>
        ))}
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Futuro