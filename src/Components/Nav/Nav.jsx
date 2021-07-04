/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Nav() {
  return (
    <header className="bg-gray-800 px-4 lg:px-8 py-3 text-white flex justify-between items-center sticky top-0 z w-full">
      <div className="sm:flex">
        <h1 className="font-semibold tracking-wider">TAILWINDCSS</h1>

        <ul
          className="uppercas md:ml-10 text-sm
         md:flex md:gap-3 hidden"
        >
          <li>
            <a className="hover:text-gray-300" href="#">
              Documentation
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Components
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#">
              Example Pages
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex gap-3 items-center hidden">
        <ul className="flex gap-3 ">
          <li>
            <a className="cursor-pointer hover:text-gray-400" href="">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-gray-400" href="">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-gray-400" href="">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <button className="px-4 py-1 text-sm bg-gray-700 hover:text-gray-300  rounded-full focus">
          Check free
        </button>
      </div>

      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
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
