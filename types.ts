import { BellIcon, CpuChipIcon, PhoneIcon, PlayCircleIcon, ShieldExclamationIcon, SquaresPlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export const products = [
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

export const products2 = [
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


export const callsToAction = [
    { name: "See Demo", href: "#", icon: PlayCircleIcon }, {
        name: "Contact Support", href: "contact", icon: PhoneIcon
    }
]