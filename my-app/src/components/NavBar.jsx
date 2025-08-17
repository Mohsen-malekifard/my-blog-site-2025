"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <a className="text-white font-extrabold text-2xl tracking-wider uppercase drop-shadow-lg">Brand</a>
            </Link>
            <span className="text-yellow-300 font-semibold animate-pulse">🔥 Hot</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/"><a className="text-white hover:text-yellow-300 transition-all duration-300 font-semibold">Home</a></Link>
            <Link href="/about"><a className="text-white hover:text-yellow-300 transition-all duration-300 font-semibold">About</a></Link>
            <Link href="/blog"><a className="text-white hover:text-yellow-300 transition-all duration-300 font-semibold">Blog</a></Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none transform hover:scale-110 transition-transform duration-200">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-2 pt-2 pb-3 space-y-2 animate-slide-down">
          <Link href="/"><a className="block text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold">Home</a></Link>
          <Link href="/about"><a className="block text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold">About</a></Link>
          <Link href="/blog"><a className="block text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold">Blog</a></Link>
        </div>
      )}
    </nav>
  );
}
