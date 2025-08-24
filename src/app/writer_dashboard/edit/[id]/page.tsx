"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPost() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");

  useEffect(() => {
    // TODO: Fetch post details by id from backend
    setTitle("How to Learn React");
    setExcerpt("This post explains how to get started with React...");
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: PUT request to update post
    console.log({ title, excerpt });
    router.push("/dashboard");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Excerpt"
          className="w-full border p-2 rounded h-32"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}
