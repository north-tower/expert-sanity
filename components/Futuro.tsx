"use client";

import Link from 'next/link';
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle, BarChart2, FileText, Clock, Layers, Sparkles } from "lucide-react";

// Enhanced query to get more structured data
const query = groq`
*[_type == "service"] {
  _id,
  title,
  description,
  slug,
  servicePoints[],
  icon
}
`;

interface Service {   
  description: string;
  title: string;
  _id: string;
  slug?: { current: string };
  servicePoints?: string[];
  icon?: string;
}
   
function Futuro() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const initialServices = await client.fetch(query);
        console.log("Fetched services:", initialServices);
        setServices(initialServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Default icons if none provided
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "chart":
        return <BarChart2 size={24} />;
      case "document":
        return <FileText size={24} />;
      case "time":
        return <Clock size={24} />;
      case "layers":
        return <Layers size={24} />;
      default:
        return <CheckCircle size={24} />;
    }
  };

  // Enhanced animation variants
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
        ease: [0.22, 1, 0.36, 1] // Custom easing curve
      }
    }
  };

  // Generate placeholder services for loading state
  const placeholderServices = Array(4).fill(null).map((_, i) => ({
    _id: `placeholder-${i}`,
    title: "Loading...",
    description: "Loading service description...",
  }));

  // Display placeholder during loading or actual services when loaded
  const displayServices = isLoading ? placeholderServices : services;

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/50 to-white py-24 overflow-hidden">
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced decorative backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-200/20 mix-blend-multiply blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <motion.div 
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Enhanced section heading */}
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-20"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                DISCOVER OUR SERVICES
              </p>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-5xl xl:text-6xl mb-6">
              Finance as a Service Solution
            </h2>
            <div className="relative mt-8 mb-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elevate your business with our comprehensive financial solutions designed for modern enterprises
            </p>
          </motion.div>

          {/* Enhanced services grid */}
          <motion.div 
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:gap-12"
            variants={containerVariants}
          >
            {displayServices.map((service, index) => (
              <motion.div 
                key={service._id} 
                className="group relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(service._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  p-10 bg-white/80 backdrop-blur-lg rounded-3xl
                  border border-blue-100/50 transition-all duration-500 h-full
                  flex flex-col relative overflow-hidden
                  ${isLoading ? 'animate-pulse' : ''}
                  ${hoveredCard === service._id ? 
                    'shadow-2xl shadow-blue-200/50 border-blue-200/50 -translate-y-2' : 
                    'shadow-lg hover:shadow-xl'}
                `}>
                  {/* Enhanced service icon */}
                  <div className="mb-8">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center
                      transition-all duration-500 relative group-hover:scale-110
                      ${hoveredCard === service._id ? 
                        'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white' : 
                        'bg-blue-100 text-blue-600'}
                    `}>
                      {getIcon(service.icon)}
                      <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced service title */}
                  <h3 className={`
                    text-2xl font-bold mb-4 transition-all duration-300
                    ${hoveredCard === service._id ? 
                      'text-blue-600 translate-x-2' : 
                      'text-gray-800'}
                  `}>
                    {service.title}
                  </h3>
                  
                  {/* Enhanced description and service points */}
                  {isLoading ? (
                    <div className="space-y-3 mt-4 flex-grow">
                      <div className="h-4 bg-gray-200/50 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-200/50 rounded-full w-5/6"></div>
                      <div className="h-4 bg-gray-200/50 rounded-full w-4/6"></div>
                    </div>
                  ) : (
                    <div className="mt-4 text-gray-600 flex-grow">
                      <p className="text-lg leading-relaxed">{service.description}</p>
                      
                      {service.servicePoints && service.servicePoints.length > 0 && (
                        <ul className="space-y-4 mt-6">
                          {service.servicePoints.slice(0, 3).map((point, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-blue-500/30 flex items-center justify-center mr-3 mt-0.5 group-hover/item:border-blue-500 transition-colors">
                                <CheckCircle className="h-4 w-4 text-blue-500" />
                              </span>
                              <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  
                  {/* Enhanced button */}
                  <div className="mt-10">
                    <Link 
                      href={service.slug ? `/services/${service.slug.current}` : "/services"}
                      className="group inline-flex items-center"
                    >
                      <span className={`
                        relative overflow-hidden rounded-full 
                        px-8 py-3 text-white font-medium
                        flex items-center gap-2
                        transition-all duration-300
                        ${hoveredCard === service._id ? 
                          'bg-gradient-to-r from-blue-600 to-indigo-600' : 
                          'bg-blue-600 hover:bg-blue-700'}
                      `}>
                        <span className="relative z-10">Explore Service</span>
                        <ArrowRight className={`
                          h-5 w-5 transition-all duration-300
                          ${hoveredCard === service._id ? 'translate-x-1' : ''}
                        `}/>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </span>
                    </Link>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/5 to-blue-600/5 rounded-tr-[80px] -z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced call to action */}
          <motion.div 
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-lg font-medium relative group"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                View all services
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

export default Futuro;