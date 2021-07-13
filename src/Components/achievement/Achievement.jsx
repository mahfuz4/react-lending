import React from "react";
import Card from "./Card";

export default function Achievement() {
  return (
    <div className="pt-36 ">
      <div className="text-center text-white ">
        <h3 className="text-md font-semibold ">ON THE COASTLINE</h3>
        <h1 className="text-3xl py-2 font-bold">We are missing the summer</h1>
        <p className="text-xl py-2 text-gray-400 mx-auto w-10/12 lg:w-8/12">
          We're waiting for the weather to warm up so that we can go to the
          coastline. We really miss the summertime, our second home the
          coastline.
        </p>
      </div>
            <div className='grid md:grid-cols-3 gap-8 md:max-w-3xl lg:max-w-5xl mx-auto px-5 mt-16'>
                <Card />
            </div>
        </div>
  );
}
