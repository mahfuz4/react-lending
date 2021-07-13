import React, { createContext, useContext } from "react";

const icon_img = [
  {
    id: 1,
    url: "www.facebook.com",
    icon_1: "fab fa-twitter text-blue-400",
  },
  {
    id: 2,
    url: "www.facebook.com",
    icon_1: "fab fa-facebook text-blue-500",
  },
  {
    id: 3,
    url: "www.facebook.com",
    icon_1: "fab fa-dribbble text-red-500",
  },
  {
    id: 4,
    url: "www.facebook.com",
    icon_1: "fab fa-github",
  }
];

const IconContext = createContext();

export default function Iconimg() {
  return (
    <IconContext.Provider value={icon_img}>
      <div className="my-6">
        <Icon />
      </div>
    </IconContext.Provider>
  );
}

export function Icon() {
  const context = useContext(IconContext)
  return (
    <>
      {context.map(icon => (
        <a
          key={icon.id}
          type="button"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-regular shadow-lg font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
          href={icon.url}
        >
          <i className={icon.icon_1}></i>
        </a>
      ))}
    </>
  );
}
