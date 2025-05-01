'use client'

import Link from 'next/link'
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define types more clearly
interface Step {
  title: string
  description: string
}

interface Service {
  step1: Step
  step2: Step
  step3: Step
  step4: Step
  _updatedAt: string
  description: string
  href: string
  _rev: string
  _type: string
  _id: string
  title: string
  _createdAt: string
}

// Sanity query
const serviceQuery = groq`
  *[_type == "service"][0]
`

// Step component for better reusability
const ServiceStep = ({ number, title, description }: { number: string, title?: string, description?: string }) => (
  <motion.div 
    className="relative flex gap-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: Number(number) * 0.1 }}
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg text-white sm:text-2xl flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{title || "Loading..."}</h3>
      <p className="mt-3 text-gray-600">{description || "Loading description..."}</p>
    </div>
  </motion.div>
)

// Skeleton loading component
const StepSkeleton = ({ number }: { number: string }) => (
  <div className="relative flex gap-5">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-300 text-lg text-white sm:text-2xl">
      {number}
    </div>
    <div className="w-full">
      <div className="h-6 w-1/2 rounded bg-gray-300 mb-3"></div>
      <div className="h-4 w-full rounded bg-gray-200"></div>
      <div className="h-4 w-3/4 rounded bg-gray-200 mt-2"></div>
    </div>
  </div>
)

function Forecast() {
  const [services, setServices] = useState<Service | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true)
        const data = await client.fetch(serviceQuery)
        setServices(data)
      } catch (err) {
        console.error("Failed to fetch service data:", err)
        setError("Failed to load service information. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-screen-xl px-4 py-10 md:px-8">
        <div className="mx-auto max-w-screen-xl">
          <motion.div 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl">
              {isLoading ? "Loading Service Information..." : services?.title}
            </h2>
            {!isLoading && (
              <p className="mx-auto max-w-xl text-gray-600 sm:text-lg">
                How does {services?.title} work
              </p>
            )}
          </motion.div>

          {error && (
            <div className="text-center p-4 bg-red-50 text-red-600 rounded-lg mb-8">
              {error}
            </div>
          )}

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div 
              className="flex flex-col justify-center text-center sm:text-left md:pr-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold text-gray-900">How it works</h1>
              <p className="text-gray-600">
                These steps ensure a structured approach to {services?.title || "our service"}, 
                providing valuable insights to support strategic decision-making and business planning.
              </p>
            </motion.div>

            <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gray-50 p-8 shadow-lg md:grid-cols-2 lg:mt-0">
              {isLoading ? (
                <>
                  <StepSkeleton number="01" />
                  <StepSkeleton number="02" />
                  <StepSkeleton number="03" />
                  <StepSkeleton number="04" />
                </>
              ) : (
                <>
                  <ServiceStep 
                    number="01" 
                    title={services?.step1.title} 
                    description={services?.step1.description} 
                  />
                  <ServiceStep 
                    number="02" 
                    title={services?.step2.title} 
                    description={services?.step2.description} 
                  />
                  <ServiceStep 
                    number="03" 
                    title={services?.step3.title} 
                    description={services?.step3.description} 
                  />
                  <ServiceStep 
                    number="04" 
                    title={services?.step4.title} 
                    description={services?.step4.description} 
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-16 md:px-8">
        <motion.div 
          className="mx-auto flex w-full flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Get in touch</h2>
          <p className="mb-8 text-2xl font-bold text-blue-500 sm:text-3xl">
            Let&apos;s take your business to the next level
          </p>
          
          <Link href="/contact">
            <button className="rounded-lg bg-blue-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Forecast