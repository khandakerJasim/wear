import React, { useState } from "react";

export default function Hovereffect({ src1, src2, alt }) {
  const [hovering, sethovering] = useState(false);
  return (
    <>
      <img
        className="w-full h-48 transition-all duration-500 object-cover p-2 ease-in"
        onMouseEnter={() => sethovering(true)}
        onMouseLeave={() => sethovering(false)}
        src={hovering ? src2 : src1}
        alt={alt}
      />
    </>
  );
}
