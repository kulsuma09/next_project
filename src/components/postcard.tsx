import Link from "next/link";
import { useState } from "react";
export interface Post {
  id: number;
  category: string;
  author:string;
  title: string;
  excerpt: string;
  image: string;
}

export default function PostCard({ post }: { post: Post }) {

  // Limit excerpt to first 20 words
  const shortExcerpt = post.excerpt.split(" ").slice(0, 20).join(" ") + " ...";
  return (
    <>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          {/* Left */}
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-[#49739c] text-sm">{post.category}</p>
              <p className="text-[#0d141c] text-base font-bold">{post.title}</p>
              <p className="text-[#49739c] text-sm">By {post.author}</p>
              <p className="text-[#49739c] text-sm">{shortExcerpt}</p>
            </div>
            <Link href={`/single_ink/${post.id}`} className="bg-[#e7edf4] text-[#0d141c] text-sm px-4 h-8 rounded-lg w-fit flex items-center"> Read More</Link>
          </div>

          {/* Right: Image */}
          <div
            className="w-full aspect-video bg-cover rounded-lg flex-1"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        </div>
      </div>
    </>
  );
}
