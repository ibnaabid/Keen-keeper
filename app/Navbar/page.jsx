// "use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-gradient-to-r from-blue-100 to-purple-100 lg:mb-48 shadow-md w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>

      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            
          </label>

          <Link href="/" className="btn btn-ghost text-blue-700 text-xl font-bold">
            Keen<span className="text-green-700">Keeper</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4 gap-4 flex text-[15px]">

            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-gray-500 shadow hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/timeline"
              className="px-4 py-2 rounded-lg bg-gray-500 shadow hover:bg-purple-500 hover:text-white transition duration-300"
            >
              TimeLine
            </Link>

            <Link
              href="/starts"
              className="px-4 py-2 rounded-lg bg-gray-500 shadow hover:bg-green-500 hover:text-white transition duration-300"
            >
              Starts
            </Link>

          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="collapse-content lg:hidden z-1">
        <ul className="menu gap-3 mt-3">

          <Link
            href="/"
            className="block px-3 py-2 rounded-md bg-gray-500 shadow hover:bg-blue-500 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/timeline"
            className="block px-3 py-2 rounded-md bg-gray-500 shadow hover:bg-purple-500 hover:text-white transition"
          >
            TimeLine
          </Link>

          <Link
            href="/starts"
            className="block px-3 py-2 rounded-md bg-gray-500 shadow hover:bg-green-500 hover:text-white transition"
          >
            Starts
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;