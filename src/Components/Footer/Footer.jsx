import React from "react";
import Iconimg from "./Iconimg";

export default function Footer() {
  return (
    <section className="bg-blue-50">
      <div className="grid md:grid-cols-2 gap-4 md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto py-24 -mt-16 border-b border-gray-300">
        <div className="text-center md:text-left">
          <h1 className="text-xl tracking-wide font-semibold text-gray-700 leading-relaxed	">
            Let's keep in touch!
          </h1>
          <p className="text-base text-gray-500">
            Find us on any of these platforms, we respond 1-2 business days.
          </p>
          <Iconimg />
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 text-center md:text-left">
          <div className="text-sm text-gray-600 leading-relaxed">
            <h2 className="  font-semibold">USEFUL LINKS</h2>
            <ul className="list-none">
              <li>
                <a href="www.local.com">About Us</a>
              </li>
              <li>
                <a href="www.local.com">Blog</a>
              </li>
              <li>
                <a href="www.local.com">Github</a>
              </li>
              <li>
                <a href="www.local.com">Free Product</a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-600 leading-relaxed">
            <h2 className="  font-semibold">OTHER RESOURCES</h2>
            <ul className="list-none">
              <li>
                <a href="www.local.com">License</a>
              </li>
              <li>
                <a href="www.local.com">Terms & Condition</a>
              </li>
              <li>
                <a href="www.local.com">Privecy policy</a>
              </li>
              <li>
                <a href="www.local.com">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 text-sm tracking-wider	 text-gray-500 text-center">
        <p>Copyright © 2021 Mahfuz Anam & ZubayerJS.</p>
      </div>
    </section>
  );
}
