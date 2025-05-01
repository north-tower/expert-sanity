"use client";

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel2 } from "./Carousel2";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, ArrowUpRight, CheckCircle } from "lucide-react";

const query2 = groq`
*[_type == "landingPage"][0]
`;

interface LandingPage {
  mainTitle: string;
  subTitle: string;
  leadText: string;
}

function Landing() {
  const [landingText, setLandingPage] = useState<LandingPage>({
    mainTitle: "",
    subTitle: "",
    leadText: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialLanding = await client.fetch(query2);
        setLandingPage(initialLanding);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch landing page data:", error);
      }
    };

    fetchData2();
  }, []);

  // Smooth scroll to clients section
  const scrollToClients = () => {
    const clientsSection = document.getElementById("clients-section");
    if (clientsSection) {
      clientsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-200/20 mix-blend-multiply blur-3xl animate-pulse delay-500"></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-200/20 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-indigo-200/20 rounded-3xl transform -rotate-12"></div>
      </div>

      {/* Main content */}
      <motion.section 
        className="relative py-24 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                  WELCOME TO PROCOUNTS
                </p>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
                  {landingText?.mainTitle || "Cultivating"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Financial Clarity
                </span>
              </h1>
              
              <div className="relative mt-8 mb-10">
                <div className="absolute left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mt-10">
                {landingText?.leadText || 
                  "We provide expert financial services tailored to your business needs, helping you navigate complex financial landscapes with confidence and precision."}
              </p>
              
              <motion.div 
                variants={itemVariants}
                className="mt-12 flex flex-wrap gap-6"
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

            {/* Enhanced visual section */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg border border-blue-100/50 shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 p-8">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: "📈", label: "Growth", value: "150%+" },
                      { icon: "🎯", label: "Accuracy", value: "99.9%" },
                      { icon: "⚡", label: "Efficiency", value: "2x" },
                      { icon: "🤝", label: "Clients", value: "500+" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl transform rotate-12 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 rounded-2xl transform -rotate-12 -z-10"></div>
            </motion.div>
          </div>
          
          {/* Enhanced scroll indicator */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 flex justify-center"
          >
            <button 
              onClick={scrollToClients}
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">Meet Our Clients</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Enhanced clients section */}
      <motion.section 
        id="clients-section"
        className="relative py-24 bg-gradient-to-b from-white to-blue-50/30"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                TRUSTED PARTNERS
              </p>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg border border-blue-100/50 p-8"
          >
            <Carousel2 />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Landing;