import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((elem, i) => (
        <span className="" key={i}>
          {rating > i ? (
            <AiFillStar className="text-orange-500 " />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </div>
  );
}
