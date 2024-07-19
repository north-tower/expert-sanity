"use client"

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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

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

  return (
    <main>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.author.name}</p>
            <p>{post._createdAt}</p>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </main>
  );
}

