"use client"

import About from "@/components/About";
import Cta from "@/components/Cta";
import Details from "@/components/Details";
import Footer from "@/components/Footer";
import Futuro from "@/components/Futuro";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Serve from "@/components/Serve";
import Tail from "@/components/Tail";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Author {
  name: string;
}

interface Post {
  _id: string;
  title: string;
  author: Author;
  _createdAt: string;
}

interface landingPage {
  _id: string;
  mainTitle: string;
  subTitle: string;
  leadText: string;
  _createdAt: string;
}

const query = groq`
*[_type == "post"] {
  _id,
  title,
  author-> {
    name
  },
  _createdAt
} | order(_createdAt desc)
`;

const query2 = groq`
*[_type == "landingPage"][0]
`;


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [landingPage, setLandingPage] = useState<landingPage[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialPosts = await client.fetch(query);
        console.log("Fetched posts:", initialPosts);
        setPosts(initialPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, []);
  
   useEffect(() => {
    const fetchData2 = async () => {
      try {
        const initialLanding = await client.fetch(query2);
        console.log("Fetched landing:", initialLanding);
        setLandingPage(initialLanding);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData2();
  }, []);

  

  return (
    <main className="relative overflow-hidden">
      <div className="w-full snap-y snap-mandatory">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section className="snap-start">
            <Landing />
          </section>

          <section className="snap-start">
            <Details />
          </section>

          <section className="snap-start">
            <Futuro />
          </section>

          <section className="snap-start">
            <Hero />
          </section>

          <section id="serve-section" className="snap-start">
            <Serve />
          </section>

          <section className="snap-start">
            <Grow />
          </section>

          <section className="snap-start">
            <Tail />
          </section>
        </motion.div>
      </div>
    </main>
  );
}

