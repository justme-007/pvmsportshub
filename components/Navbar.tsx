import Link from "next/link";
import image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-lg font-bold text-gray-900">
          PVM Sports Hub
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-sky-500 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-sky-500 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-sky-500 transition">
            About
          </Link>
        </nav>

        {/* MOBILE PLACEHOLDER */}
        <div className="md:hidden text-sm text-gray-600">
          Menu
        </div>
      </div>
    </header>
  );
}