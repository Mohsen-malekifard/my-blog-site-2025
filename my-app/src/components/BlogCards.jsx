import data5 from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function BlogCards() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            مقالات آموزشی
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            جدیدترین مقالات، آموزش‌ها و مطالب کاربردی در حوزه تکنولوژی و یادگیری.
          </p>
        </div>

        {/* Blog Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data5.map((blog) => (
            <li
              key={blog.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 group flex flex-col"
            >
              {/* Blog Thumbnail */}
              <div className="relative h-56 w-full overflow-hidden">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.bookTitle}
                    fill
                    className="object-cover group-hover:scale-105 transform transition duration-500"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                    {blog.bookTitle.charAt(0)}
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-gray-900 text-xl font-bold mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                  {blog.bookTitle}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description.length > 150
                    ? blog.description.slice(0, 150) + "..."
                    : blog.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{blog.date || "۱۴۰۴/۰۵/۲۵"}</span>
                  <Link
                    href={`/Blog/${blog.title}`}
                    className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm transition-colors duration-300"
                  >
                    ادامه مطلب →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
