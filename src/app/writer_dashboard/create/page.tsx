"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]); // dynamic list

  // Simulating fetch (you can replace this with real API call)
  useEffect(() => {
    const fetchCategories = async () => {
      // Example static data; replace with fetch('/api/categories') if needed
      const categoryList = [
        "Technology",
        "Business",
        "Nature",
        "Travel",
        "Lifestyle",
      ];
      setCategories(categoryList);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send to backend API
    console.log({ title, excerpt, category });

    router.push("/dashboard");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dynamic Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select a Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Title */}
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Excerpt */}
        <textarea
          placeholder="Excerpt"
          className="w-full border p-2 rounded h-32"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
