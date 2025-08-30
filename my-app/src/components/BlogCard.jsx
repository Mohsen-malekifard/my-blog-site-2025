import data5 from "@/app/lib/data";
import Link from "next/link";

const finded = data5.filter(blog => blog.id < "7");

export default function BlogCard() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {finded.map((blog, index) => (
                <li 
                    key={index} 
                    className="bg-black rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
                >
                    <div className="p-5 flex flex-col h-full">
                        {/* Title */}
                        <h1 className="text-2xl font-bold text-white group-hover:text-blue-600 transition-colors duration-200">
                            {blog.bookTitle}
                        </h1>

                        {/* Divider Line */}
                        <div className="w-16 h-1 bg-blue-500 mt-2 mb-4 rounded-full"></div>

                        {/* Description (اختیاری: اگه داده داری) */}
                        {blog.description && (
                            <p className="text-gray-600 text-sm flex-grow leading-relaxed">
                                {blog.description.slice(0, 100)}...
                            </p>
                        )}

                        {/* Button */}
                        <Link 
                            href={`Blog/${blog.title}`}
                            className="mt-4 w-full text-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition duration-200"
                        >
                            Read more →
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
