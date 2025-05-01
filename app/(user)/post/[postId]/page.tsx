'use client'

import Article from '@/components/Article';
import React, { useEffect, useState } from 'react';
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

type Props = {
  params: {
    postId: string;
  }
}

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



function shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

function Page({ params: { postId } }: Props) {
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

  const post = posts.find(p => p._id.toString() === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-screen-xl px-4 py-8 md:px-8">
        <article>
          <header className="relative mx-auto max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-blue-500">Published {post.publishedAt}</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg text-gray-700">{post.leadText}</p>
            <img 
              className="absolute top-0 left-0 h-96 w-full object-cover opacity-20" 
              src={post.mainImageUrl || "https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
              alt={post.title} 
            />
          </header>

          <div className="mx-auto max-w-screen-lg space-y-8 rounded-b-lg bg-white px-8 pt-10 pb-20 text-lg tracking-wide text-gray-700 shadow-lg">
            {post.body.map((block, index) => (
              <p key={block._key} className="leading-relaxed">{block.children.map(child => child.text).join(' ')}</p>
            ))}
          </div>
        </article>

        <div className="mx-auto mt-10 flex w-fit space-x-2">
          <div className="h-0.5 w-2 bg-blue-500"></div>
          <div className="h-0.5 w-32 bg-blue-500"></div>
          <div className="h-0.5 w-2 bg-blue-500"></div>
        </div>

        <aside aria-label="Recent Posts" className="mx-auto mt-10 max-w-screen-xl py-20">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-blue-500 md:mb-6 lg:text-3xl">Related Posts</h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Explore more articles that provide valuable insights and tips on bookkeeping, financial management, and business strategies. These related posts are carefully selected to help you deepen your understanding and enhance your business acumen.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
              {shuffleArray(posts).slice(0, 4).map((post) => (
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
        </aside>
      </main>
    </div>
  );
}

export default Page;
