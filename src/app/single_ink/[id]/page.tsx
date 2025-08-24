
import { ALL_POSTS } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

const comments = [
  {
    name: "Emily Carter",
    time: "2 days ago",
    text: "Great article! I've been working remotely for the past year, and it's been a game-changer.",
    likes: 12,
    replies: [
      {
        name: "David Lee",
        time: "3 days ago",
        text: "I agree. It requires discipline, but it's a fantastic way to work.",
        likes: 8,
      },
    ],
  },
];

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = ALL_POSTS.find((p) => p.id === Number(params.id));
  if (!post) return notFound();

  return (
    <div className="px-6 lg:px-40 py-10 bg-white text-[#0d141c] max-w-7xl mx-auto">
      {/* Back Link */}
      <Link href="/" className="text-[#01070c] text-sm mb-4 inline-block font-semibold">
        ← Back to Home
      </Link>

      {/* Post Title & Meta */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-[#49739c] mb-4">
        By {post.author} · Published on January 15, 2024
      </p>

      {/* Featured Image */}
      <div
        className="w-full h-[400px] bg-cover bg-center rounded-lg mb-6"
        style={{ backgroundImage: `url(${post.image})` }}
      />

      {/* Post Content */}
      <p className="text-base leading-relaxed text-[#0d141c] mb-10">
        {post.excerpt}
      </p>

      <hr className="mb-6" />

      {/* Comments Section */}
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="space-y-6">
        {comments.map((c, i) => (
          <div key={i} className="bg-[#f9fafb] p-4 rounded-lg">
            <p className="font-semibold">
              {c.name}{" "}
              <span className="text-sm text-gray-500">· {c.time}</span>
            </p>
            <p className="text-sm text-[#0d141c] mt-1">{c.text}</p>
            <div className="flex gap-4 text-sm mt-2 text-[#49739c]">
              <span>👍 {c.likes}</span>
              <span>💬 {c.replies.length}</span>
            </div>

            {/* Replies */}
            <div className="ml-4 mt-4 space-y-2">
              {c.replies.map((r, j) => (
                <div key={j} className="border-l-2 pl-4 border-[#e7edf4]">
                  <p className="font-semibold">
                    {r.name}{" "}
                    <span className="text-sm text-gray-500">· {r.time}</span>
                  </p>
                  <p className="text-sm text-[#0d141c] mt-1">{r.text}</p>
                  <span className="text-sm text-[#49739c]">👍 {r.likes}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Comment */}
      <div className="mt-8">
        <textarea
          rows={4}
          placeholder="Add a comment"
          className="w-full p-3 border border-[#e7edf4] rounded-lg"
        />
        <button className="mt-2 px-4 py-2 bg-[#3d99f5] text-white rounded-lg">
          Post Comment
        </button>
      </div>
    </div>
  );
}

