import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

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

export default async function Home() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch(query);
    console.log("Fetched posts:", posts); // Log the fetched posts
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

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

