"use client";

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Clock, Shield, Sparkles, ArrowRight, BarChart2 } from "lucide-react";

const query = groq`
*[_type == "details"][0] {
  Description,
  features[]
}
`;

interface Details {
  Description: string;
  features?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}
 
function Details() {
  const [details, setDetails] = useState<Details>({Description: ''});
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialDetails = await client.fetch(query);
        console.log("Fetched details:", initialDetails);
        setDetails(initialDetails);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch details:", error);
      }
    };

    fetchData();
  }, []);

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

  // Default features with enhanced descriptions
  const defaultFeatures = [
    {
      icon: "accuracy",
      title: "Precision & Accuracy",
      description: "Our meticulous approach ensures error-free financial records, giving you confidence in your business decisions.",
      stat: "99.9%",
      statLabel: "Accuracy Rate"
    },
    {
      icon: "time",
      title: "Time Efficiency",
      description: "Reclaim valuable hours with our streamlined processes that handle the complexity while you focus on growth.",
      stat: "60%",
      statLabel: "Time Saved"
    },
    {
      icon: "compliance",
      title: "Regulatory Compliance",
      description: "Stay ahead of changing regulations with our expertise in financial compliance and reporting requirements.",
      stat: "100%",
      statLabel: "Compliance Rate"
    },
    {
      icon: "insights",
      title: "Actionable Insights",
      description: "Transform raw financial data into strategic insights that drive profitability and business expansion.",
      stat: "2x",
      statLabel: "Growth Rate"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "accuracy":
        return <CheckCircle className="h-6 w-6" />;
      case "time":
        return <Clock className="h-6 w-6" />;
      case "compliance":
        return <Shield className="h-6 w-6" />;
      case "insights":
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <BarChart2 className="h-6 w-6" />;
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/50 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-200/20 mix-blend-multiply blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-200/20 mix-blend-multiply blur-3xl animate-pulse delay-500"></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-200/20 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-indigo-200/20 rounded-3xl transform -rotate-12"></div>
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left content column */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-5/12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wider">
                INNOVATIVE SOLUTIONS
              </p>
            </div>

            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
                Revolutionary Way to
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Handle Bookkeeping
              </span>
            </h2>

            <div className="relative mt-8 mb-10">
              <div className="absolute left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mt-10">
              {details?.Description || "Transform your financial management with our innovative approach to bookkeeping. We combine cutting-edge technology with expert knowledge to deliver unparalleled results."}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: "Accuracy Rate", value: "99.9%" },
                { label: "Time Saved", value: "60%" },
                { label: "Happy Clients", value: "500+" },
                { label: "ROI Increase", value: "2.5x" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right features grid */}
          <motion.div 
            variants={containerVariants}
            className="lg:w-7/12 grid gap-6 sm:grid-cols-2"
          >
            {defaultFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg
                  border border-blue-100/50 p-6 transition-all duration-500
                  ${hoveredCard === index ? 'shadow-2xl shadow-blue-200/50 -translate-y-1' : 'shadow-lg'}
                `}
              >
                <div className="mb-4">
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center
                    transition-all duration-500 relative group-hover:scale-110
                    ${hoveredCard === index ? 
                      'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white' : 
                      'bg-blue-100 text-blue-600'}
                  `}>
                    {getIcon(feature.icon)}
                  </div>
                </div>

                <h3 className={`
                  text-xl font-semibold mb-3 transition-all duration-300
                  ${hoveredCard === index ? 'text-blue-600' : 'text-gray-900'}
                `}>
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                      <div>
                    <div className="text-2xl font-bold text-blue-600">{feature.stat}</div>
                    <div className="text-sm text-gray-500">{feature.statLabel}</div>
                      </div>
                  <ArrowRight className={`
                    h-5 w-5 text-blue-600 transform transition-all duration-300
                    ${hoveredCard === index ? 'translate-x-1 opacity-100' : 'opacity-0'}
                  `} />
                    </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Details;