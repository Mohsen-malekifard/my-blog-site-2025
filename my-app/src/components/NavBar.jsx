import React from 'react';
import { Home, Info, Rss } from 'lucide-react';

// A modern and stylish navigation bar component
const NavBar = () => {
  return (
    // Fixed navigation bar at the top of the page with a clean, modern design
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl">
      <nav className="flex items-center justify-between p-4 bg-white rounded-full shadow-md">

        {/* Website logo or name with a professional look */}
        <div className="text-lg font-bold text-gray-800 tracking-wider">
          <span className="text-blue-600">Sleek</span>App
        </div>

        {/* Navigation links with icons and hover effects */}
        <ul className="flex space-x-4">
          {/* Home button */}
          <li>
            <a
              href="/"
              className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-blue-600
              transition-colors duration-300 rounded-full py-2 px-4 group"
            >
              <Home className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              <span>Home</span>
            </a>
          </li>

          {/* About button */}
          <li>
            <a
              href="/About"
              className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-blue-600
              transition-colors duration-300 rounded-full py-2 px-4 group"
            >
              <Info className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              <span>About</span>
            </a>
          </li>

          {/* Blog button */}
          <li>
            <a
              href="/Blog"
              className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-blue-600
              transition-colors duration-300 rounded-full py-2 px-4 group"
            >
              <Rss className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
