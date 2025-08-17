import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white font-bold text-xl">Brand</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/"><a className="text-white hover:text-yellow-300 transition">Home</a></Link>
            <Link href="/about"><a className="text-white hover:text-yellow-300 transition">About</a></Link>
            <Link href="/blog"><a className="text-white hover:text-yellow-300 transition">Blog</a></Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-2 pt-2 pb-3 space-y-1">
          <Link href="/"><a className="block text-white px-3 py-2 rounded hover:bg-purple-700 transition">Home</a></Link>
          <Link href="/about"><a className="block text-white px-3 py-2 rounded hover:bg-purple-700 transition">About</a></Link>
          <Link href="/blog"><a className="block text-white px-3 py-2 rounded hover:bg-purple-700 transition">Blog</a></Link>
        </div>
      )}
    </nav>
  );
}
