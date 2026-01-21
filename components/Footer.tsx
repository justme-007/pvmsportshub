import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            PVM Sports Hub
          </h3>
          <p className="mt-3 text-sm">
            Premium football jerseys made for true fans.  
            Quality, comfort, and confidence — on and off the pitch.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-sky-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-sky-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-400 transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Support
          </h4>
          <p className="text-sm">
            Email us at
          </p>
          <a
            href="holuwapvm1@gmail.com"
            className="text-sm text-sky-400 hover:underline"
          >
            holuwapvm1@gmail.com
          </a>
        </div>

       {/* SOCIALS */}
<div>
  <h4 className="text-sm font-semibold text-white mb-4">
    Follow Us
  </h4>

  <div className="flex items-center gap-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/16sj71MDYC/?mibextid=wwXIfr"
      aria-label="Facebook"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-gray-800 text-gray-400
                 hover:bg-sky-500 hover:text-white
                 transition"
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V11h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/>
      </svg>
    </a>

    {/* Twitter */}
    <a
      href="https://x.com/oluwapelumi_pvm?s=21"
      aria-label="Twitter"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-gray-800 text-gray-400
                 hover:bg-sky-500 hover:text-white
                 transition"
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23 3a10.9 10.9 0 01-3.1.9A5.4 5.4 0 0022.4.4a10.7 10.7 0 01-3.4 1.3A5.4 5.4 0 0016.6 0c-3 0-5.3 2.7-4.6 5.6A15.3 15.3 0 011.6.8a5.4 5.4 0 001.7 7.2 5.2 5.2 0 01-2.4-.7c-.1 2.5 1.7 4.9 4.3 5.4a5.5 5.5 0 01-2.4.1c.7 2.2 2.7 3.8 5.1 3.8A10.9 10.9 0 010 19.5a15.4 15.4 0 008.4 2.5c10.1 0 15.7-8.5 15.4-16.1A11 11 0 0023 3z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/pvmjerseys?igsh=MTZ1a3N1dmhwd2J1cw%3D%3D&utm_source=qr"
      aria-label="Instagram"
      className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-gray-800 text-gray-400
                 hover:bg-sky-500 hover:text-white
                 transition"
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
      </svg>
    </a>
  </div>
</div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} PVM Sports Hub. All rights reserved.
      </div>
    </footer>
  );
}