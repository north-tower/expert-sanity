"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/sanity.client";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const query = groq`
*[_type == "clients"] {
  _id,
  name,
  _createdAt,
  _updatedAt,
  "mainImageUrl": mainImage.asset->url,
  mainImage {
    alt,
    asset
  }
}
`;

interface Client {
  _id: string;
  name: string;
  _createdAt: string;
  _updatedAt: string;
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  mainImageUrl: string;
}

export function Carousel2() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [plugin, setPlugin] = React.useState<ReturnType<typeof Autoplay> | null>(null);

  // Create autoplay plugin with custom options
  React.useEffect(() => {
    if (!plugin) {
      setPlugin(
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        })
      );
    }
  }, [plugin]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const initialClient = await client.fetch(query);
        console.log("Fetched clients:", initialClient);
        setClients(initialClient);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle slide change to update active index for indicators
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  // Generate placeholder clients for loading state
  const placeholderClients = Array(6).fill(null).map((_, i) => ({
    _id: `placeholder-${i}`,
    name: `Client ${i+1}`,
    _createdAt: "",
    _updatedAt: "",
    mainImage: {
      alt: "Loading...",
      asset: {
        _ref: "",
        _type: ""
      }
    },
    mainImageUrl: ""
  }));

  const displayClients = loading ? placeholderClients : clients;

  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={plugin ? [plugin as unknown as any] : []}
        className="w-full"
      >
        <CarouselContent className="py-4">
          {displayClients.map((client, index) => (
            <CarouselItem 
              key={client._id} 
              className="md:basis-1/3 lg:basis-1/4 px-2 sm:px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`
                  overflow-hidden
                  rounded-2xl
                  border border-blue-100
                  transition-all
                  duration-300
                  hover:shadow-lg
                  hover:border-blue-300
                  ${loading ? 'animate-pulse bg-blue-50' : ''}
                `}>
                  <CardContent className="flex items-center justify-center p-6 h-24">
                    {loading ? (
                      <div className="w-full h-12 bg-gray-200 rounded"></div>
                    ) : (
                      <img
                        src={client.mainImageUrl}
                        alt={client.mainImage.alt || client.name}
                        className="h-full w-full object-contain filter transition-all duration-300 hover:brightness-110"
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
          {displayClients.slice(0, Math.min(displayClients.length, 6)).map((_, index) => (
            <span
              key={`indicator-${index}`}
              className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                activeIndex % displayClients.length === index
                  ? "w-6 bg-blue-600"
                  : "bg-blue-200"
              }`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="hidden md:flex -left-6 bg-white border border-blue-100 text-blue-600 hover:bg-blue-50 hover:text-blue-700" />
        <CarouselNext className="hidden md:flex -right-6 bg-white border border-blue-100 text-blue-600 hover:bg-blue-50 hover:text-blue-700" />
      </Carousel>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 italic">
          Trusted by {clients.length} industry-leading companies
        </p>
      </div>
    </div>
  );
}
