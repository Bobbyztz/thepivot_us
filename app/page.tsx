export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <h1 className="group text-4xl font-bold text-white text-center">
        {/* Original text visible by default */}
        <span className="duration-300 group-hover:hidden">
          MAKE US GREAT AGAIN.
        </span>
        {/* New text visible on hover */}
        <span className="hidden duration-300 group-hover:inline">
          legendztz@outlook.com
        </span>
      </h1>
    </div>
  );
}
