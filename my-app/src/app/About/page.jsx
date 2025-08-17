import React from 'react';
import { Mail, Github, User } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-10 rounded-3xl shadow-2xl max-w-lg mx-auto my-16 overflow-hidden group">
      {/* Animated background orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600 rounded-full opacity-30 blur-3xl animate-ping"></div>
      <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-pink-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 animate-textShine">
        About Me
      </h1>

      {/* Info Cards */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <User className="text-purple-400 w-7 h-7 animate-bounce" />
          <div>
            <p className="text-gray-400 text-sm">Full Name</p>
            <p className="font-semibold text-lg">Mohsen Malekifard</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <Mail className="text-pink-400 w-7 h-7 animate-pulse" />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-semibold text-lg">mohsenmaleki1389@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          <Github className="text-gray-300 w-7 h-7 animate-spin-slow" />
          <div>
            <p className="text-gray-400 text-sm">GitHub</p>
            <a
              href="https://github.com/Mohsen-Malekifard"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              github.com/Mohsen-Malekifard
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-textShine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
