import React from "react";
import img1 from "./../../../assets/Profile/joshim.jpg";
import img2 from "./../../../assets/Profile/male.jpg";
import img3 from "./../../../assets/Profile/women.jpg";
import img4 from "./../../../assets/banner/full-shot-woman-online-fashion-shopping.jpg";
import { Link } from "react-router-dom";

export default function Newarrival() {
  const images = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
  ];
  return (
    <div className="bg-gray-700  w-full h-full ">
      <div className=" pb-10 pt-10 ">
        <h1
          className="text-4xl text-center text-white  mb-5 bg-transparent  relative
           before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:bottom-0 before:left-0 before:bg-red-500
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
          before:transition before:ease-in-out before:duration-300 "
        >
          New Arrival
        </h1>
        <p className="text-center text-xl font-semibold text-white">
          Fresh find our latest Arrivals
        </p>
        <div className="flex gap-4 mt-8 items-center justify-center p-4 m-auto">
          {images.map((im) => (
            <React.Fragment>
              <div key={im.id} className="overflow-hidden">
                <img
                  className="h-[300px] items-center  rounded-md bg-cover cursor-pointer
                   hover:scale-125 transition-all"
                  src={im.image}
                  alt=""
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        <Link>
          <button className="bg-red-600 m-auto flex justify-center text-white mt-10 text-sm font-bold p-2 rounded-md   w-[100px]">
            view All
          </button>
        </Link>
      </div>
    </div>
  );
}
