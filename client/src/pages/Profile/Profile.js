import React, { useEffect, useState } from "react";
import image from "./../../assets/Profile/joshim.jpg";

export default function Profile() {
  return (
    <div className=" head  w-full h-auto">
      <div className="p-3  flex justify-center  ">
        <div className="p-4 bg-gray-400">
          <div className="p-3 bg-blue-200">
            <div className=" p-4 bg-white m-auto flex-col flex items-center pb-10">
              <h1 className="text-gray-800 opacity-90 text-4xl text-center font-bold">
                Your Profile
              </h1>
              <img
                className="w-[150px] h-[150px] mt-4  rounded-full"
                src={image}
                alt=""
              />

              <ul className="mt-7 opacity-80 text-xl text-center font-bold">
                <li>Name:Joshim uddin</li>
                <li>Phone:+8801710863690</li>
                <li>Email:md.joshimuddin975@gmail.com</li>
              </ul>
              <button className="text-3xl mt-7 bg-red-500 text-white p-2 w-[100px] rounded-md flex justify-center">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
