import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhoneAlt, FaCameraRetro } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F0FFFF] text-black sticky top-0 z-50 p-4 transition-all duration-300 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold font-fairdisplay tracking-wide text-black hover:text-blue-500 transition duration-500"
        >
          Visionary
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold space-x-8">
          <li>
            <Link
              to="/"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              <FaHome className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              <FaPhoneAlt className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/ar"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              <FaCameraRetro className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              AR Try-On
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-blue-500 focus:outline-none transition-transform duration-300 transform hover:rotate-180"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <ul className="flex flex-col space-y-4 mt-4 p-4 bg-[#F8F8FF]">
          <li>
            <Link
              to="/"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <FaPhoneAlt className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/ar"
              className="flex items-center text-black hover:text-blue-500 transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <FaCameraRetro className="mr-2 text-xl hover:text-blue-500 transition-transform duration-300" />
              AR Try-On
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
