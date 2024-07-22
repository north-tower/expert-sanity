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
    <main >
    <div className="max-w-8xl"> 
    {/* <section className='snap-center'>
      <Header2 />
    </section> */}

    <section className='snap-center'>
        <Landing />
    </section>
     
    <section className='snap-center'>
        <Details />
    </section>
    <section className='snap-center'>
      <Futuro />
    </section>
    <section className='snap-center'>
      <Hero />
    </section>
    <section className='snap-center'>
        <Serve />
    </section>
    <section className='snap-center'>
      <Grow />
    </section>
    <section className='snap-center'>
      <Tail />
    </section>
    <section className='snap-center'>
      <Cta />
    </section> 
    {/* <section className='snap-center'>
      <Footer />
    </section>  */}
    {/* <section className='snap-center'>
      <About />
    </section>  */}
    {/* <section className='snap-center'>
        <Details />
    </section>
 
    <section className='snap-center'>
      <Futuro />
    </section>
  
    <section className='snap-center'>
      <Hero />
    </section>
    <section className='snap-center'>
        <Serve />
    </section>
  
    
    <section className='snap-center'>
      <Grow />
    </section> */}
    {/* <section className='snap-center'>
      <About />
    </section> */}
    {/* <section className='snap-center'>
      <Tail />
    </section>
    <section className='snap-center'>
      <Cta />
    </section> */}
{/* 
    <section className='snap-center'>
      <Footer />
    </section> */}
    </div>
    
    </main>
  );
}

