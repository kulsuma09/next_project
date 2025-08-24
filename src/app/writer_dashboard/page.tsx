"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
}

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // TODO: Fetch writer's posts from backend
    setPosts([
      {
        id: 1,
        title: "How to Learn React",
        excerpt: "This post explains how to get started with React...",
        createdAt: "2025-08-20",
      },
      {
        id: 2,
        title: "Mastering Next.js",
        excerpt: "Next.js is a powerful framework for React...",
        createdAt: "2025-08-18",
      },
    ]);
  }, []);

  const handleDelete = async (id: number) => {
    // TODO: Send DELETE request to API
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-10 max-w-[960px] m-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Writer Dashboard</h1>
        <Link href="/writer_dashboard/create">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            + New Post
          </button>
        </Link>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-5 bg-white shadow-sm flex justify-between flex-wrap gap-1">
            <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <p className="text-sm text-gray-400">Published: {post.createdAt}</p>
            </div>
            <div className="mt-3 flex gap-6 items-center">
              <Link href={`/dashboard/edit/${post.id}`}>
              <button className="text-blue-600 hover:underline">Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
