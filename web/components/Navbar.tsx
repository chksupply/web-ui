import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gray-950 text-white flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        chksupply
      </Link>

      {/* Search and Upload */}
      <div className="flex items-center gap-4 flex-1 justify-center">
        <input
          type="text"
          placeholder="Search for packages"
          id="searchBar"
          className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-300 w-48 focus:w-64"
        />
        <label
          htmlFor="uploadFile"
          className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 mr-2 fill-white inline"
            viewBox="0 0 32 32"
          >
            <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
            <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
          </svg>
          Upload
          <input type="file" id="uploadFile" className="hidden" />
        </label>
      </div>

      {/* Right Navigation Links */}
      <div className="flex gap-6 items-center text-sm">
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/explore" className="hover:text-gray-300">
          Explore
        </Link>
        <Link href="/submit" className="hover:text-gray-300">
          Submit
        </Link>
        <Link href="/blog" className="hover:text-gray-300">
          Blog
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <a
          href="https://github.com/chksupply/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          GitHub Stars
        </a>
        <a
          href="https://github.com/chksupply/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          Edit this page →
        </a>
      </div>
    </nav>
  );
}
