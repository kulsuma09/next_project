'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReactionShareBar({ postTitle }: { postTitle: string }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // This runs on the client only
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 p-4 bg-[#f1f5f9] rounded-lg">
      {/* Reaction Bar */}
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <button className="hover:scale-110 transition">👍 Like</button>
        <button className="hover:scale-110 transition">❤️ Love</button>
        <button className="hover:scale-110 transition">😆 Haha</button>
        <button className="hover:scale-110 transition">😮 Wow</button>
        <button className="hover:scale-110 transition">😢 Sad</button>
        <button className="hover:scale-110 transition">😡 Angry</button>
      </div>

      {/* Share Bar */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            navigator.clipboard.writeText(currentUrl);
            alert("Link copied to clipboard!");
          }} className="text-sm bg-white px-3 py-1 rounded border hover:bg-gray-100">Copy Link</button>
        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(postTitle)}`}
          target="_blank"
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Share to Twitter
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          className="text-sm bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800"
        >
          Share to Facebook
        </Link>
      </div>
    </div>
  );
}
