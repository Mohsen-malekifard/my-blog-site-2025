import data5 from "@/app/lib/data";
import Link from "next/link";

export default function BlogCards() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Latest Articles
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insightful stories, tips, and resources from our blog.
          </p>
        </div>

        {/* Blog Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data5.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Blog Thumbnail (Placeholder if no image) */}
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:scale-105 transform transition duration-300 flex items-center justify-center text-white font-bold text-2xl">
                {blog.bookTitle.charAt(0)}
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <h2 className="text-gray-900 text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                  {blog.bookTitle}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description.length > 150
                    ? blog.description.slice(0, 150) + "..."
                    : blog.description}
                </p>

                <Link
                  href={`/Blog/${blog.title}`}
                  className="mt-auto inline-block bg-indigo-600 text-white font-semibold rounded-lg px-5 py-2 text-center shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
                >
                  Read More →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
