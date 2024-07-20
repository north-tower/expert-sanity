'use client'

import React, { useEffect, useState } from 'react';
import Article from "@/components/Article";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
*[_type == "post"] {
  _id,
  title,
  author,
  publishedAt,
  leadText,
  body,
  "mainImageUrl": mainImage.asset->url,
  mainImage {
    alt,
    asset
  }
}
`;

interface Post {
  _id: string;
  title: string;
  author: string;
  publishedAt: string;
  leadText: string;
  body: {
    _type: string;
    style: string;
    _key: string;
    markDefs: any[];
    children: {
      _type: string;
      marks: any[];
      text: string;
      _key: string;
    }[];
  }[];
  mainImageUrl: string;
}

function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialPosts = await client.fetch(query);
        console.log("Fetched Posts:", initialPosts);
        setPosts(initialPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-blue-500 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Stay updated with our latest insights and tips on effective bookkeeping and financial management. Our recent posts cover a range of topics designed to help you streamline your business finances and make informed decisions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {posts.map((post) => (
              <Article
                key={post._id}
                id={post._id}
                date={post.publishedAt}
                title={post.title}
                description={post.leadText}
                image={post.mainImageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
