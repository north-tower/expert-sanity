"use client";

import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, BarChart2, Target, Award } from "lucide-react";

const query = groq`
*[_type == "grow"]
`;

interface Grow {   
  Description: string;
  Title: string;
_id: string;
} 

function Grow() {
  const [grow, setGrow] = useState<Grow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        setIsLoading(true);
        const initialGrow = await client.fetch(query);
        console.log("Fetched grow:", initialGrow);
        setGrow(initialGrow);
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

  // Get icon based on index
  const getIcon = (index: number) => {
    const icons = [TrendingUp, BarChart2, Target, Award];
    return icons[index % icons.length];
  };

  // Generate placeholder items for loading state
  const placeholderItems = Array(3).fill(null).map((_, i) => ({
    _id: `placeholder-${i}`,
    Title: "Loading...",
    Description: "Loading description...",
  }));

  const displayItems = isLoading ? placeholderItems : grow;

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
        
        {/* Animated geometric shapes */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64"
        >
          <div className="absolute inset-0 rounded-3xl border-2 border-blue-200/30 transform rotate-0"></div>
          <div className="absolute inset-0 rounded-3xl border-2 border-blue-200/20 transform rotate-15"></div>
          <div className="absolute inset-0 rounded-3xl border-2 border-blue-200/10 transform rotate-30"></div>
        </motion.div>
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
                OUR GROWTH STORY
              </p>
  </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-5xl mb-6">
              Growing Together
      </h2>
            <div className="relative mt-8 mb-10">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Track our journey of success and growth as we continue to innovate and excel in financial services
            </p>
          </motion.div>

          {/* Enhanced stats grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {displayItems.map((item, index) => {
              const IconComponent = getIcon(index);
              return (
                <motion.div
                  key={item._id}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(item._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                    relative overflow-hidden rounded-3xl
                    bg-white/80 backdrop-blur-lg
                    border border-blue-100/50
                    p-8 h-full
                    transition-all duration-500
                    ${isLoading ? 'animate-pulse' : ''}
                    ${hoveredCard === item._id ? 
                      'shadow-2xl shadow-blue-200/50 border-blue-200/50 -translate-y-2' : 
                      'shadow-lg hover:shadow-xl'}
                  `}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`
                        w-14 h-14 rounded-2xl
                        flex items-center justify-center
                        transition-all duration-500
                        relative group-hover:scale-110
                        ${hoveredCard === item._id ? 
                          'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white' : 
                          'bg-blue-100 text-blue-600'}
                      `}>
                        <IconComponent className="h-6 w-6" />
                        <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
    </div>

                    {/* Content */}
                    <h3 className={`
                      text-3xl font-bold mb-4
                      transition-all duration-300
                      ${hoveredCard === item._id ? 
                        'text-blue-600 translate-x-2' : 
                        'text-gray-800'}
                    `}>
                      {item.Title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.Description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/5 to-blue-600/5 rounded-tr-[80px] -z-10"></div>
      </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced decorative line */}
          <motion.div 
            className="mt-16 flex justify-center"
            variants={itemVariants}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </motion.div>
        </motion.div>
</section>
    </div>
  );
}

export default Grow;