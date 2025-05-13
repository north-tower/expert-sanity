'use client';

import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { cn } from "@/lib/utils";
import { callsToAction, products2 } from "@/types";
import { 
  UserGroupIcon, CpuChipIcon, SparklesIcon, ChartBarIcon, 
  GlobeAltIcon, SquaresPlusIcon 
} from "@heroicons/react/24/outline";
import { 
  ArrowRight, Menu, X, ChevronDown, ChevronUp, 
  Sparkles, ExternalLink 
} from "lucide-react";

const query = groq`
*[_type == "service"]
`;

interface Service {   
  description: string;
  title: string;
  _id: string;
  href: string;
}

function Header() {
  const [services, setServices] = useState<Service[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialServices = await client.fetch(query);
        setServices(initialServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchData2();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconForService = (serviceTitle: string) => {
    const title = serviceTitle.toLowerCase();
    if (title.includes('consult')) return CpuChipIcon;
    if (title.includes('training')) return UserGroupIcon;
    if (title.includes('support')) return SparklesIcon;
    if (title.includes('analytics')) return ChartBarIcon;
    if (title.includes('global')) return GlobeAltIcon;
    return SquaresPlusIcon;
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-500",
      scrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-lg h-[72px]" // Fixed height when scrolled
        : "bg-transparent backdrop-blur-sm h-[88px]" // Fixed height when at top
    )}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-full" aria-label="Global">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div 
            className="flex lg:flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                className={cn(
                  "transition-all duration-300 group-hover:scale-105",
                  scrolled ? "h-12" : "h-16"
                )}
                src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
                alt="Company Logo" 
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(true)}
              className="relative inline-flex items-center justify-center rounded-full p-3 text-gray-800 bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white/95 transition-all"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <Popover.Group className="hidden lg:flex lg:gap-x-8">
            {/* Navigation Links */}
            {['Home', 'Blog', 'contact'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative group py-2"
              >
                <span className="text-sm font-medium tracking-wide text-gray-800 transition-colors group-hover:text-blue-600">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group inline-flex items-center gap-x-1 text-sm font-medium text-gray-800 py-2 focus:outline-none">
                    <span className="transition-colors group-hover:text-blue-600">Services</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 text-gray-400 transition-all duration-300 group-hover:text-blue-600",
                      open ? "rotate-180" : ""
                    )} />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform">
                      <div className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5">
                        <div className="relative grid gap-6 p-6">
                          {services.map((service) => {
                            const ServiceIcon = getIconForService(service.title);
                            return (
                              <motion.div
                                key={service._id}
                                onMouseEnter={() => setHoveredItem(service._id)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className={cn(
                                  "group relative flex items-center gap-x-6 rounded-xl p-4",
                                  "transition-all duration-300",
                                  hoveredItem === service._id 
                                    ? "bg-gradient-to-r from-blue-50 to-indigo-50/50" 
                                    : "hover:bg-gray-50"
                                )}
                              >
                                <div className={cn(
                                  "flex h-12 w-12 flex-none items-center justify-center rounded-lg",
                                  "transition-all duration-300",
                                  hoveredItem === service._id
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                                    : "bg-blue-50 group-hover:bg-blue-100"
                                )}>
                                  <ServiceIcon className={cn(
                                    "h-6 w-6 transition-colors duration-300",
                                    hoveredItem === service._id
                                      ? "text-white"
                                      : "text-blue-600 group-hover:text-blue-700"
                                  )} />
                                </div>
                                <div className="flex-auto">
                                  <Link
                                    href={`/${service.href}`}
                                    className="block font-medium text-gray-800 group-hover:text-blue-600 transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                                </div>
                                <ExternalLink className={cn(
                                  "h-5 w-5 transition-all duration-300",
                                  hoveredItem === service._id
                                    ? "opacity-100 text-blue-600"
                                    : "opacity-0 translate-x-2"
                                )} />
                              </motion.div>
                            );
                          })}
                        </div>
                        <div className="bg-gray-50 px-6 py-4">
                          <div className="flex items-center gap-x-3">
                            <Sparkles className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-900">New Services Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* About Us Dropdown - Similar structure to Services */}
            {/* ... (implement similar to Services dropdown) ... */}
          </Popover.Group>

          {/* Login Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#" 
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
              >
                <span>Log in</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* Mobile menu content */}
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-12 w-auto"
                  src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
                  alt="Company Logo"
                />
              </Link>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2.5 text-gray-700 bg-gray-100/50 hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                {/* Mobile navigation links */}
                {['Home', 'Blog', 'Contact Us'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="group -mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-gray-800 hover:bg-blue-50 transition-colors"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                ))}

                {/* Mobile services section */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-800 hover:bg-blue-50 transition-colors">
                        <span>Services</span>
                        {open ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service._id}
                            href={`/${service.href}`}
                            className="group block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span>{service.title}</span>
                              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </div>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              {/* Mobile login button */}
              <div className="py-6">
                <Link
                  href="#"
                  className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
                >
                  <span>Log in</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}

export default Header;
