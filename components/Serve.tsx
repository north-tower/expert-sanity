"use client";

import Link from 'next/link';
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Briefcase, GraduationCap, ChevronRight, Sparkles } from "lucide-react";

const query = groq`
*[_type == "serve"]
`;

interface Serve {   
  description: string;
  title: string;
  _id: string;
}

function Serve() {
  const [serve, setServe] = useState<Serve[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        setIsLoading(true);
        const initialServe = await client.fetch(query);
        console.log("Fetched serve:", initialServe);
        setServe(initialServe);
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

  // Get icon based on title
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('business')) return Building2;
    if (lowerTitle.includes('professional')) return Briefcase;
    if (lowerTitle.includes('student')) return GraduationCap;
    return Users;
  };

  // Generate placeholder items for loading state
  const placeholderItems = Array(6).fill(null).map((_, i) => ({
    _id: `placeholder-${i}`,
    title: "Loading...",
    description: "Loading description...",
  }));

  const displayItems = isLoading ? placeholderItems : serve;

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
      </div>

      <section className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Enhanced header section */}
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                WHO WE SERVE
              </p>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-5xl mb-6">
              Tailored Solutions for Every Need
            </h2>
            <div className="relative mt-8 mb-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Whether you're a small business owner, a freelancer, or part of a larger organization,
              our solutions are designed to meet your unique financial needs.
            </p>
          </motion.div>

          {/* Enhanced grid layout */}
          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
            variants={containerVariants}
          >
            {displayItems.map((item, index) => {
              const IconComponent = getIcon(item.title);
              return (
                <motion.div
                  key={item._id}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(item._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                    p-8 bg-white/80 backdrop-blur-lg rounded-2xl
                    border border-blue-100/50 transition-all duration-500
                    relative overflow-hidden h-full
                    ${isLoading ? 'animate-pulse' : ''}
                    ${hoveredCard === item._id ? 
                      'shadow-2xl shadow-blue-200/50 border-blue-200/50 -translate-y-2' : 
                      'shadow-lg hover:shadow-xl'}
                  `}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center
                        transition-all duration-500 relative group-hover:scale-110
                        ${hoveredCard === item._id ? 
                          'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white' : 
                          'bg-blue-100 text-blue-600'}
                      `}>
                        <IconComponent className="h-6 w-6" />
                        <div className="absolute inset-0 rounded-xl bg-blue-600/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`
                      text-xl font-bold mb-4 transition-all duration-300
                      ${hoveredCard === item._id ? 
                        'text-blue-600 translate-x-2' : 
                        'text-gray-800'}
                    `}>
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Learn more link */}
                    <div className="mt-auto">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium group/link"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
                        </span>
                        <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[80px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-600/5 to-blue-600/5 rounded-tr-[60px] -z-10"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced call to action */}
          <motion.div 
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-lg font-medium relative group"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Get Started Today
              </span>
              <ChevronRight className="h-5 w-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Serve;