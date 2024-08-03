import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-700">
            MyApp
          </Link>

          {/* Primary Navbar items centered */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/mypost" className="text-gray-700 hover:text-gray-900">
              My Post
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              Profile
            </Link>
          </div>

          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="py-2 px-4 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="py-2 px-4 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </Link>
        <Link
          to="/mypost"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          My Post
        </Link>
        <Link
          to="/profile"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Profile
        </Link>
        <Link to="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Log In
        </Link>
        <Link
          to="/register"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
