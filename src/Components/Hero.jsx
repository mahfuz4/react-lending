import React from "react";

export default function Hero() {
  return (
    <section className="h-96">
      <div
        className="bg-center bg-cover bg-no-repeat h-full w-full block"
        style={{
          backgroundImage: "url('../image/hero.webp')"
        }}
      ></div>
    </section>
  );
}
