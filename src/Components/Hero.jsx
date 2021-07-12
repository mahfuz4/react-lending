import React from "react";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className="h-96">
      <div
        className={`${classes.hero} hero bg-center bg-no-repeat h-custom bg-cover w-full mb-css lg:large-css flex flex-col text-center text-gray-200 justify-center items-center px-5`}
      >
        <h1 className="text-3xl md:text-5xl  mb-4  font-bold">
          Your story starts with us.
        </h1>
        <p className=" md:px-10 lg:px-48 xl:px-96 2xl:text-2xl">
          This is a simple example of a Landing Page you can build using
          Tailwindcss. It features multiple CSS components based on the Tailwind
          CSS design system.
        </p>
      </div>
    </div>
  );
}