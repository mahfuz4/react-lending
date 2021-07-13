import React from "react";
import Icon from "./Icon";

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

export default function Iconimg() {
  return (
    <div className="mt-6 lg:mb-0 mb-6 flex ">
      {icon_img.map(({ id, url, icon_1 }) => (
        <Icon key={id} url={url} icon_1={icon_1} />
      ))}
    </div>
  );
}
