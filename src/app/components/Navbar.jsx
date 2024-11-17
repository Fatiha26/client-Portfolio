"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for menu open and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-center items-center p-4">
      {/* Menu icon for mobile view */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white focus:outline-none absolute top-4 right-6"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden lg:flex text-sm  font-semibold">
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="#about"
        >
          About
        </Link>
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="#blog"
        >
          Blogs
        </Link>
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="#skill"
        >
          Skills
        </Link>
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="#project"
        >
          Projects
        </Link>
        <Link
          className="px-4 py-2 border border-white text-secondary-400 hover:text-black hover:border-secondary-200 rounded-lg"
          href="#contact"
        >
          Contact
        </Link>
      </div>

      {/* Dropdown menu for mobile view */}
      {isOpen && (
        <div className="lg:hidden absolute top-10 right-4 px-16 py-2  bg-white shadow-md rounded-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              onClick={toggleMenu}
              className="text-secondary-400 hover:text-black"
              href="/"
            >
              About
            </Link>
            <Link
              onClick={toggleMenu}
              className="text-secondary-400 hover:text-black"
              href="/"
            >
              Blogs
            </Link>
            <Link
              onClick={toggleMenu}
              className="text-secondary-400 hover:text-black"
              href="/"
            >
              Skills
            </Link>
            <Link
              onClick={toggleMenu}
              className="text-secondary-400 hover:text-black"
              href="/"
            >
              Projects
            </Link>
            <Link
              onClick={toggleMenu}
              className="text-secondary-400 hover:text-black"
              href="/"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
