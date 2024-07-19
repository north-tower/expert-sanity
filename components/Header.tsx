'use client';

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon , ChatBubbleLeftIcon, HomeIcon, 
    PaperAirplaneIcon,
    ChevronDownIcon, Square3Stack3DIcon,BellIcon,
    PhoneIcon, PlayCircleIcon,UserGroupIcon,CpuChipIcon,PuzzlePieceIcon,CircleStackIcon,SparklesIcon,ChartBarIcon, CubeIcon,GlobeAltIcon,SquaresPlusIcon,ShieldExclamationIcon,
     XMarkIcon} from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Popover, Transition } from
 "@headlessui/react"
import { cn } from "@/lib/utils";
import { Link2Icon } from "lucide-react";



function Header() {

    const [mobileMenuOpen , setMobileMenuOpen] = useState(false);

    const products = [
        {
            name: "Outsourced Bookkeeping Services",
            description: "Outsourcing bookkeeping services provide businesses with expert financial management without the overhead of an in-house team.By leveraging professional bookkeepers, businesses can ensure accurate transaction recording, expense tracking, and financial reporting.This service allows business owners to focus on growth and operations while maintaining precise and compliant financial records.",
            href: "/services",
            icon: UserGroupIcon, 

        },
        {
            name: "Financial Forecasting",
            description: "Financial forecasting involves predicting future financial performance based on historical data, current trends, and market conditions. This process helps businesses plan strategically, allocate resources effectively, and make informed decisions. By utilizing advanced modeling techniques and scenario analysis, financial forecasting provides valuable insights into potential future outcomes, ensuring better preparedness and optimized growth strategies.",
            href: "/forecast",
            icon: CpuChipIcon,
        },
       
    ];

    const products2 = [
        {
            name: "Values and Mission",
            description: "Our values of accuracy, integrity, and innovation drive our mission to deliver exceptional bookkeeping services, empowering businesses to achieve financial clarity and success.",
            href: "/values",
            icon: SquaresPlusIcon,

        },
        {
            name: "Terms of service",
            description: "Our terms of service govern the use of our bookkeeping services, ensuring compliance with data accuracy, confidentiality, and legal standards for a secure and reliable financial management partnership. ",
            href: "/terms",
            icon: ShieldExclamationIcon,
        },
        {
            name: "Careers",
            description: "Join our team and build a rewarding career with at our company ",
            href: "/careers",
            icon: BellIcon,
        },
    ];

    const products3 = [
        {
            name: "Insights",
            description: "Articles , White Paper",
            href: "#",
            icon: CircleStackIcon,

        },
        {
            name: "Successes",
            description: "Case Studies , Testimonials ",
            href: "#",
            icon: SparklesIcon,
        },
       
    ];

    const products4 = [
        {
            name: "Careers",
            description: "Articles , White Paper",
            href: "#",
            icon: ChartBarIcon,
        },
        {
            name: "Management Team",
            description: "Case Studies , Testimonials ",
            href: "#",
            icon: CubeIcon,
        },
        {
            name: "Press",
            description: "Case Studies , Testimonials ",
            href: "#",
            icon: GlobeAltIcon,
        },
       
    ];
    const callsToAction = [
        { name: "See Demo", href: "#", icon: PlayCircleIcon }, {
            name: "Contact Support", href: "contact", icon: PhoneIcon
        }
    ]


  return (
    <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center
        justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1 ">
                <Link href="/" 
                 className="-m-1.5 p-1.5">
                 <span className="sr-only">Booking.com</span>
                <img className="h-32 w-32"
                src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
                alt="" />
                
                </Link>
            
            </div>

            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5
                inline-flex items-center justify-center 
                rounded-md p-2.5 text-black" 
                onClick={() => setMobileMenuOpen(true)}>
                    <span className="sr-only">
                        Open main menu

                    </span>
                    <Bars3Icon className="h-6 w-6" 
                    aria-hidden="true" /> 

                </button>
            </div>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 text-black">
                   <span >
                   Home
                    </span> 
                </Link>
                <Popover className="relative">
                    <Popover.Button className="flex items-center
                    gap-x-1 text-sm font-semibold leading-6 text-black">
                    <span >
                    Services
                        </span>    
                        <ChevronDownIcon className="h-5 w-5 flex-none text-black"
                        aria-hidden="true" />
                    </Popover.Button>

                    <Transition as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1" >

                        <Popover.Panel 
                        className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen 
                        max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item.name}
                                    className="group relative flex items-center gap-x-6
                                    rounded-lg p-4 
                                    text-sm leading-6 
                                     hover:bg-gray-200">
                                       <div className="flex h-11 flex-none items-center 
                                       justify-center rounded-lg 
                                       ">
                                        <item.icon className="h-6 w-6 text-black
                                        group-hover:text-blue-600" 
                                        aria-hidden="true" />
                                       
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} 
                                            className="block 
                                            font-semibold text-[#013B94] "> {item.name} 
                                            <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-black">{item.description}</p>
                                        </div>
                                        </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 ">
                                {callsToAction.map((item) => (
                                    <Link key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100">
                                        <item.icon className="h-5 w-5 flex-none text-[#013B94]" aria-hidden="true" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
              
               
                  <Link href="/blog" className="text-sm font-semibold leading-6 text-black ">
                    Blog
                </Link>
                <Popover className="relative">
                    <Popover.Button className="flex items-center
                    gap-x-1 text-sm font-semibold leading-6 text-black ">
                    <span >
                    About Us
                        </span>    
                        <ChevronDownIcon className="h-5 w-5 flex-none text-black"
                        aria-hidden="true" />
                    </Popover.Button>

                    <Transition as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1" >

                        <Popover.Panel 
                        className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products2.map((item) => (
                                    <div key={item.name}
                                    className="group relative flex items-center gap-x-6
                                    rounded-lg p-4 
                                    text-sm leading-6 
                                    hover:bg-gray-200">
                                       <div className="flex h-11 flex-none items-center justify-center rounded-lg 
                                       ">
                                        <item.icon className="h-6 w-6 text-black group-hover:text-blue-600" 
                                        aria-hidden="true" />
                                       
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} 
                                            className="block 
                                            font-semibold text-[#013B94] "> {item.name} <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-black">{item.description}</p>
                                        </div>
                                        </div>
                                ))}
                            </div>

                            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 ">
                                {callsToAction.map((item) => (
                                    <a key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100">
                                        <item.icon className="h-5 w-5 flex-none text-[#013B94]" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                        </Popover.Panel>
                    </Transition>
                </Popover>
                  {/* <a href="/about" className="text-sm font-semibold leading-6 text-white ">
                    About Us
                </a> */}
               <Link href="/contact" className="text-sm font-semibold leading-6 text-black">
                    Contact Us
                </Link>
                
            </Popover.Group>
         

            <div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
                <a href="#" className="text-sm font-semibold leading-6 ">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>

        <Dialog as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
            <div className="fixed inset-8 z-10" />

            <Dialog.Panel className="fixed inset-y-0 right-4 z-10 w-full
            overflow-y-auto bg-blue-500 px-6 py-6 sm:max-w-sm sm:ring-1
            sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Procounts Kenya</span>
                        <img className="h-12 w-auto bg-blue-500" 
                            src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
                        alt="" />
                    </a>
                        <button type="button" className="-m-2.5 
                        rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(false)} >
                            <span className="sr-only">Close Menu</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />

                        </button>
                </div> 
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Disclosure className="-mx-3" as="div" > 
                                    {( {open} )  => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center 
                                            justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                                            font-semibold leading-7 text-white hover:bg-blue-600">
                                               Services
                                                    <ChevronDownIcon className={cn( open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />                                               
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button 
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm 
                                                    font-semibold leading-7 text-white hover:bg-blue-600"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                            </Disclosure>
                            <Link href="/blog"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                            leading-7 text-white hover:bg-blue-600">
                                Blog</Link> 
                                <Disclosure className="-mx-3" as="div" > 
                                    {( {open} )  => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                                            font-semibold leading-7 text-white hover:bg-blue-600">
                                               About Us
                                                    <ChevronDownIcon className={cn( open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />                                               
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products2].map((item) => (
                                                    <Disclosure.Button 
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm 
                                                    font-semibold leading-7 text-white hover:bg-blue-600"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                            </Disclosure>
                                <Link href="/contact"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold 
                            leading-7 text-white hover:bg-blue-600">
                                Contact Us</Link> 
                            
                           
                          
                                
                        </div>

                        <div className="py-6">
                            <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base
                             font-semibold leading-7 text-blue-500 hover:bg-blue-800">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
                
        </Dialog>
    </header>
  )
}

export default Header