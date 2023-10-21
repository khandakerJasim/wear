import React from "react";

export default function Sidebar() {
  return (
    <div className="md:grid bg-gray-200 flex justify-between md:gap-10 gap-4  md:p-10 p-6 rounded-md shadow-md">
      <div>
        <h1 className="border-b-2 pb-1 border-green-500 text-2xl font-bold text-red-300">
          Catagories
        </h1>
        <ul className="mt-2 list-none">
          <li>
            <button>Men</button>
          </li>
          <li>
            <button>Women</button>
          </li>
          <li>
            <button>Trending</button>
          </li>
          <li>
            <button>New arrival</button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold border-b-2 text-center border-green-500 text-red-300">
          More options
        </h1>
        <ul className="list-none mt-2 ">
          <li>
            <button>Cloths</button>
          </li>
          <li>
            <button>watch</button>
          </li>
          <li>
            <button>Shoes</button>
          </li>
          <li>
            <button>Bags</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
