"use client";

import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Building2, BookOpen, ChevronRight } from "lucide-react";

const query = groq`
*[_type == "tail"][0]
`;

interface Tail {
   
  description1: string;
  description2: string;
  description3: string;

 
}

function Tail() {
  const [tail, setTail] = useState<Tail>({description1: '', description2: '', description3: ''});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        setIsLoading(true);
        const initialTail = await client.fetch(query);
        console.log("Fetched tail:", initialTail);
        setTail(initialTail);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData2();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-200/20 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-indigo-200/20 rounded-3xl transform -rotate-12"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20"
        >
          {/* Main content section */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 lg:max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                INNOVATION & EXCELLENCE
              </p>
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Financial Company With an Edge. Innovation.
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {tail.description1}
            </p>
          </motion.div>

          {/* Cards section */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col gap-8 lg:w-[45%]"
          >
            {/* Who we are card */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg border border-blue-100/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <Building2 className="h-6 w-6" />
    </div>
  </div>

              <h3 className="text-lg font-medium text-blue-600 mb-2 uppercase tracking-wider">
                Who we are
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tail.description2}
              </p>

              <Link 
                href="/values"
                className="inline-flex items-center gap-2 text-blue-600 font-medium group/link"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
                </span>
                <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
            </motion.div>

            {/* Our Practices card */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg border border-blue-100/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">
                  <BookOpen className="h-6 w-6" />
  </div>
</div>

              <h3 className="text-lg font-medium text-blue-600 mb-2 uppercase tracking-wider">
                Our Practices
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tail.description3}
              </p>

              <Link 
                href="/terms"
                className="inline-flex items-center gap-2 text-blue-600 font-medium group/link"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
                </span>
                <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced decorative line */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Tail