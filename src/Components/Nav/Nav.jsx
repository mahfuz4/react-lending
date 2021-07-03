/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Nav() {
  return (
    <header className="bg-gray-800 px-4 py-3 text-white flex justify-between items-center fixed w-full">
      <h1 className="font-semibold tracking-wider">TAILWINDCSS</h1>

      <ul className="uppercas md:flex md:gap-3 hidden">
        <li><a className='hover:text-gray-300' href="#">Documentation</a></li>
        <li><a className='hover:text-gray-300' href="#">Components</a></li>
        <li><a className='hover:text-gray-300' href="#">Example Pages</a></li>
      </ul>

      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
    </header>
  );
}
