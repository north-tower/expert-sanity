'use client'

import Link from 'next/link'
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, ExternalLink } from "lucide-react";


const query = groq`
*[_type == "service"]
`;

interface Service {   
    description: string;
    title: string;
  _id: string;

}

function Footer() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialServices = await client.fetch(query);
        console.log("Fetched services:", initialServices);
        setServices(initialServices);
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-200/10 mix-blend-multiply blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-200/10 mix-blend-multiply blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <motion.footer 
        className="relative z-10 pt-16 pb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Newsletter section */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-4">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Stay Updated</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
                <p className="text-blue-100">
                  Stay informed with the latest updates, tips, and best practices in 
                  bookkeeping and financial management.
                </p>
    </div>
        <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-blue-600 shadow-xl transition-all duration-300 hover:shadow-blue-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2 font-medium">
                    Request a Demo
                    <ArrowUpRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </motion.button>
        </Link>
            </div>
          </motion.div>

          {/* Navigation grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16"
          >
            {/* Services column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Services
              </h3>
              <ul className="space-y-4">
        {services.map((service) => (
                  <li key={service._id}>
                    <Link 
                      href="#"
                      className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  </li>
))}
              </ul>
            </motion.div>

            {/* Company column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { title: 'Why Us?', href: '/values' },
                  { title: 'Terms of Service', href: '/terms' },
                  { title: 'Careers', href: '/careers' }
                ].map((item) => (
                  <li key={item.title}>
                    <Link 
                      href={item.href}
                      className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="relative">
                        {item.title}
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                      </span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="mailto:contact@example.com"
                    className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="relative">
                      Email Us
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="tel:+1234567890"
                    className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="relative">
                      Call Us
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
          </Link>
        </li>
                <li>
                  <Link 
                    href="/contact"
                    className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="relative">
                      Find Us
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                    </span>
          </Link>
          </li>
      </ul>
            </motion.div>

            {/* Social links column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Connect
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600">
                  Follow us on social media for the latest updates and insights.
                </p>
                <div className="flex gap-4">
                  {/* Add your social media icons/links here */}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer bottom */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-200 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Procounts Kenya. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link 
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
    </div>
  </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Footer