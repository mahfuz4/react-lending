import React from "react";

export default function Input() {
  return (
    <section className="py-28 bg-gray-900 text-white sm-css md:md-css ">
      <div className="text-center w-full  lg:w-8/12 mx-auto mb-14">
        <span 
          className="select-none uppercase text-green-600 text-xs px-2 py-1 rounded bg-green-300 font-semibold"
        >
          message us
        </span>
        <h1 className="font-bold text-xl lg:text-3xl my-2 leading-relaxed">
          Type in the bellow form
        </h1>
        <p className="text-xl text-gray-400">
          They say there's no future for the street rascals, nothing for them,
          leave them to fall. But it isn't always how you would like it to be,
          especially when you do nothing for yourself.
        </p>
      </div>
      <div className=" w-full lg:w-6/12 mx-auto text-gray-600 bg-blue-50 shadow-sm p-10 rounded ">
        <h1 className="text-gray-700 text-2xl font-bold leading-relaxed">
          Want to work with us?
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Complete this form and we will get back to you in 24 hours.
        </p>
        <form>
        <label
          htmlFor="name"
          className="uppercase tracking-wider leading-relaxed text-xs font-bold "
        >
          full name
        </label>
        <input
          id="name"
          className="mt-2 px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent mb-3 "
          placeholder="First Name"
          type="text"
        />

        <label
          htmlFor="email"
          className="uppercase tracking-wider leading-relaxed text-xs font-bold "
        >
          email
        </label>
        <input
          id="email"
          className="my-2 px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent "
          placeholder="email"
          type="text"
        />
        <label className="uppercase tracking-wider leading-relaxed text-xs font-bold text-gray-600 ">
          MESSAGE
        </label>
        <textarea
          placeholder="Type a message..."
          type="textarea"
          rows="4"
          cols="80"
          className="mt-2 px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent "
          autocomplete="off"
        ></textarea>
        <div className="text-center">
          <button
            className="mt-6 text-xs px-4 py-2 shadow hover:shadow-md  bg-gray-800 border-gray-800 active:bg-gray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold text-white"
            type="submit"
          >
            send message
          </button>
          
        </div>
        </form>
      </div>
    </section>
  );
}
