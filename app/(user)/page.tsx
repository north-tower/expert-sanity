import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->

} | order(_createdAt desc)
`;

export default async function Home() {
  let posts = [];
  try {
    posts = await client.fetch(query);
    console.log(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <main>
      {posts.length > 0 ? (
        posts.map((post: { _id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; author: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }; _createdAt: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
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

