'use client'

import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

const query = groq`
*[_type == "value"][0]
`;

interface Step {
  title: string;
  description: string;
}

interface Value {
  whoWeAre: Step;
  aboutUs: string;
  ourValues: {
    leadText: string;
    value1: Step;
    value2: Step;
    value3: Step;
  };
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
}

function Page() {
  const [value, setValue] = useState<Value>();

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialValues = await client.fetch(query);
        console.log("Fetched values:", initialValues);
        setValue(initialValues);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="md:pt-8 lg:flex lg:flex-col lg:justify-center">
              <p className="text-center font-bold text-blue-500 md:text-left">Who we are</p>
              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                {value?.whoWeAre.title}
              </h1>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                {value?.whoWeAre.description}
              </p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-2 text-center text-xl font-semibold text-blue-500 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>
              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                {value?.aboutUs}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-screen bg-white py-10 text-gray-800">
        <div className="container mx-auto w-full max-w-screen-xl">
          <div className="w-full">
            <h2 className="text-center text-3xl font-extrabold text-blue-500">Our Values</h2>
            <p className="mx-auto mb-4 max-w-xl py-2 text-center text-gray-600 sm:text-lg">
              {value?.ourValues.leadText}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full p-4 text-left lg:w-1/3">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
              <h3 className="font-sans text-4xl font-light leading-10">{value?.ourValues.value1.title}</h3>
              <p className="my-5 text-gray-600">
                {value?.ourValues.value1.description}
              </p>
            </div>
            <div className="w-full p-4 text-left lg:w-1/3">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
              <h3 className="font-sans text-4xl font-light leading-10">{value?.ourValues.value2.title}</h3>
              <p className="my-5 text-gray-600">
                {value?.ourValues.value2.description}
              </p>
            </div>
            <div className="w-full p-4 text-left lg:w-1/3">
              <hr className="mb-4 h-1.5 w-1/4 bg-blue-600" />
              <h3 className="font-sans text-4xl font-light leading-10">{value?.ourValues.value3.title}</h3>
              <p className="my-5 text-gray-600">
                {value?.ourValues.value3.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 text-gray-900 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-lg sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h2 className="capital text-3xl font-bold sm:text-4xl xl:text-4xl">
              Learn how we can transform your business
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-lg overflow-hidden sm:mt-12 md:max-w-4xl lg:mt-16">
            <div className="relative px-6 pb-12 md:px-8 md:py-10 lg:py-12">
              <div className="flex items-center md:order-2">
                <div className="relative text-center md:pl-8 lg:pl-0">
                  <p className="text-lg font-normal">
                    Transform your business today with our expert bookkeeping solutions. Lets drive efficiency,
                    accuracy, and growth together.
                  </p>
                  <Link href={"/contact"}>
                    <button className="mt-4 rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                      Get Started Now!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;
