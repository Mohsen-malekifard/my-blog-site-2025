export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex flex-col items-center space-y-4 animate-fadeIn">
        {/* Outer Glow Ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-b-transparent border-blue-400 animate-[spin_2s_linear_infinite]"></div>
        </div>

        {/* Text with shimmer effect */}
        <p className="text-blue-700 font-semibold text-base animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
          در حال بارگذاری...
        </p>
      </div>
    </div>
  );
}
