'use client'

import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";


const query = groq`
*[_type == "service"][1]
`;

interface Step {
  title: string;
  description: string;
}

interface Service {
  step1: Step;
  step2: Step;
  step3: Step;
  step4: Step;
  _updatedAt: string;
  description: string;
  href: string;
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  _createdAt: string;
}

function Services() {
  const [services, setServices] = useState<Service>();


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
        <section className="w-screen  py-10 ">
  <div className="container mx-auto w-full max-w-screen-xl">
    <div className="w-full"> 
      <h2 className="text-center text-3xl text-blue-500 font-extrabold">{services?.title}{" "}</h2>
      <p className="mx-auto mb-4 max-w-xl py-2 text-center text-gray-600 sm:text-lg">How does {" "} {services?.title} {" "}work.</p>
    </div>
    <div  className=" mx-auto py-10 grid max-w-screen-xl grid-cols-1 pl-6 pr-4 sm:px-20 lg:grid-cols-3">
  <div  className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
    <h1  className="mb-6 text-4xl">How it works..</h1> 
    <p  className="text-gray-600">Experience expert 
    {services?.title} that grows with your business,
         offering accuracy, compliance, and peace of mind at every step.</p>
  </div>
  <div  className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gray-300 p-5 sm:p-10 
  md:grid-cols-2 lg:mt-0">
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center
       rounded-full bg-gray-300 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
      <div  className=""> 
        <h3  className="text-xl font-semibold">{services?.step1.title}</h3>
        <p  className="text-gray-600 mt-3">{services?.step1.description}</p>
      </div> 
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg
       text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
      <div  className="">
        <h3  className="text-xl font-semibold">{services?.step2.title}</h3>
        <p  className="text-gray-600 mt-3">{services?.step1.description}</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 
      text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
      <div  className="">
        <h3  className="text-xl font-semibold">{services?.step3.title}</h3>
        <p  className="text-gray-600 mt-3">{services?.step3.description}</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
      <div  className="">
        <h3  className="text-xl font-semibold">{services?.step4.title}</h3>
        <p  className="text-gray-800 mt-3">{services?.step4.description}</p>
      </div>
    </div>
  </div>
</div>




{/* 
<div classNameName="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
  <div classNameName="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
    <h2 classNameName="mr-auto mb-4 text-4xl font-medium lg:text-3xl">Experience of <span classNameName="whitespace-nowrap text-blue-600 md:text-gray-600">2 Decades</span></h2>
    <a href="#" classNameName="text-lg font-medium underline hover:text-blue-600">Read our Story</a>
  </div>
  <div classNameName="flex flex-col md:flex-row">
    <div>
      <p classNameName="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis sint debitis sequi animi quaerat repellendus id distinctio dolores minus.</p>
      <p classNameName="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eos quod hic perspiciatis, consectetur suscipit maxime mollitia minima. Enim consequatur ab praesentium ipsum neque dolore expedita, earum rerum reiciendis nihil, deleniti id atque consequuntur necessitatibus distinctio aliquid explicabo quo obcaecati?</p>
    </div>
    <p classNameName="hidden uppercase md:block md:text-7xl">
      Since <br />
      <span classNameName="whitespace-nowrap text-blue-600">20 Years</span>
    </p>
  </div>
</div> */}


  </div>
</section>

    </div>
  )
}

export default Services
