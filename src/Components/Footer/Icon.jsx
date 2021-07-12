import React from "react";

export default function Icon({ url, icon_1 }) {
  return (
    <div>
      <a
        type="button"
        target="blank"
        className="bg-white text-regular shadow-lg font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
        href={url}
      >
        <i className={icon_1}></i>
      </a>
    </div>
  );
}
