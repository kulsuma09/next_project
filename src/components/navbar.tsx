"use client";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Img from "../../public/assets/images/profile.png"
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-gray-100 shadow-xl shadow-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
                <div className="size-4">
                    <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">Bloggr</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-bold text-base">
              Home
            </Link>
            <Link href="/writer_dashboard" className="text-gray-700 hover:text-gray-900 font-bold text-base">
              Create Post
            </Link>
            <Link href="/sigin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-base">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="relative z-50 md:hidden px-4 p-7 space-y-3 bg-gray-100 shadow-xl shadow-gray-200 rounded-lg">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="/createPost" className="block text-gray-700 mb-6">
            Create post
          </Link>
            <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-base">
              Login
            </Link>
        </div>
      )}
    </nav>
  );
}

