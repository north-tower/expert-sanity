"use client"

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";

const query = groq`
*[_type == "hero"][0]
`;

interface Hero {
  Title: string;
  Description: string;
}

function Hero() {
  const [hero, setHero] = useState<Hero>({Title: '', Description: ''});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialHero = await client.fetch(query);
        console.log("Fetched hero:", initialHero);
        setHero(initialHero);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch hero:", error);
      }
    };

    fetchData();
  }, []);

  // Scroll to next section
  const scrollToNext = () => {
    const nextSection = document.getElementById('serve-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-200/20 mix-blend-multiply blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-200/20 mix-blend-multiply blur-[100px] animate-pulse delay-500"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.8, 0.3], 
                scale: [1, 1.2, 1],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute h-1 w-1 rounded-full bg-blue-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-4 py-20">
        {isLoaded ? (
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Decorative label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                  WELCOME TO PROCOUNTS
                </p>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
                  {hero.Title || "Transform Your"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              
              {/* Decorative line */}
              <div className="absolute left-1/2 -bottom-8 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform -translate-x-1/2 rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {hero.Description || "Experience unparalleled financial services tailored to your business needs. We combine expertise with innovation to deliver exceptional results."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:shadow-blue-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2 font-medium">
                    Get Started
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group rounded-full border-2 border-blue-200 bg-white/50 px-8 py-4 font-medium text-blue-600 backdrop-blur-sm transition-all duration-300 hover:border-blue-600"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          // Enhanced loading state
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
            <p className="text-blue-600 animate-pulse">Loading...</p>
          </div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;