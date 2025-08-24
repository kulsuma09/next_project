"use client";
import { useMemo, useState } from "react";
import PostCard, { Post } from "@/components/postcard";
import { ALL_POSTS } from "@/lib/posts";


type Cat = "All" | "Technology" | "Lifestyle" | "Travel" | "Nature"| "Business";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Cat>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_POSTS.filter((p) => {
      const inCategory =
        category === "All" ? true : p.category === category;
      const inSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return inCategory && inSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filtered.slice(indexOfFirstPost, indexOfLastPost);
  }, [filtered, currentPage]);

  // Pagination helpers
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const range = 2; // Show 2 pages before and after the current page
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* --- Search area (before sub-nav/filters) --- */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#49739c] flex bg-[#e7edf4] items-center justify-center pl-4 rounded-l-lg">
                  {/* Magnifying glass icon (inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                    fill="currentColor">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search posts"
                  className="form-input flex w-full min-w-0 flex-1 rounded-r-lg text-[#0d141c] border-none bg-[#e7edf4] placeholder:text-[#49739c] px-3 text-base"/>
              </div>
            </label>
          </div>

          {/* --- Filter chips (sub-nav) --- */}
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {(["All", "Technology", "Lifestyle", "Travel", "Nature","Business"] as Cat[]).map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex h-8 items-center justify-center gap-x-2 rounded-lg pl-4 pr-2 transition ${active ? "ring-2 ring-[#3d99f5] bg-[#e7edf4]" : "bg-[#e7edf4]"}`}>
                  <p className="text-[#0d141c] text-sm font-medium leading-normal">
                    {cat === "All" ? "All Categories" : cat}
                  </p>
                </button>
              );
            })}
          </div>

          {/* --- Section title --- */}
          <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Recent Posts
          </h2>

          {/* --- Results list --- */}
          {paginatedPosts.length === 0 ? (
            <div className="px-4 py-6 text-[#49739c]">
              No posts found{search ? ` for “${search}”` : ""}.
            </div>
          ) : (
            paginatedPosts.map((post) => <PostCard key={post.id} post={post} />)
          )}

          {/* --- Pagination Controls --- */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#e7edf4] text-[#0d141c] rounded-lg">
                First
              </button>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#e7edf4] text-[#0d141c] rounded-lg">
                &lt;
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg ${
                    page === currentPage ? "bg-[#3d99f5] text-white" : "bg-[#e7edf4] text-[#0d141c]"
                  }`}>
                  {page}
                </button>
              ))}

              {/* Ellipsis for middle pages */}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-4 py-2">...</span>
              )}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#e7edf4] text-[#0d141c] rounded-lg">
                &gt;
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#e7edf4] text-[#0d141c] rounded-lg">
                Last
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


