import React from "react";

export default function Filter() {
  return (
    <div className=" border justify-evenly grid md:flex p-6 bg-gray-200">
      <div className="md:flex grid items-center md:gap-10  gap-6 ">
        <h1 className="hidden text-xl mr-6 md:block">Sort by:</h1>
        <div className=" text-xl mr-7 font-bold grid">
          <label className=" space-x-1" htmlFor="">
            <input type="radio" />
            <span className="md:text-base text-sm mr-2 ml-1">Low to high</span>
          </label>
          <label className=" space-x-1" htmlFor="">
            <input type="radio" />
            <span className="md:text-base text-sm">high to low</span>
          </label>
        </div>

        <div className="flex gap-10">
          <div className="grid text-xl">
            <label htmlFor="">
              <input type="checkbox" />
              Show Fast Delivery
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              Show out of Stock
            </label>
          </div>
          <button
            className="text-sm font-semibold bg-red-500 w-[80px] text-white p-1
           rounded-full "
          >
            clear all
          </button>
        </div>

        <input
          type="text"
          placeholder="search"
          className="w-[300px] h-12 text-gray-700 bg-gray-50 p-2 rounded md"
        />
      </div>
    </div>
  );
}
