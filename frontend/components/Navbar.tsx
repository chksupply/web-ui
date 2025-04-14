import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 bg-gray-950 text-white flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">chksupply</Link>

      <div className="flex gap-6 text-sm">
        {/*<Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>*/}
        {/*<Link href="/about" className="hover:text-gray-300">About</Link>*/}
        <a href="https://github.com/saip007/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          GitHub Stars
        </a>
        <a  href="https://github.com/saip007/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
        Edit this page on GitHub →
        </a>

      </div>
    </nav>
    );
}