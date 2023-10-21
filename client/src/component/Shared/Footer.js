import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-b from-slate-800 to-slate-500 text-gray-200 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-[100px] gap-4 ">
          <div>
            <h1 className="md:text-2xl text-xl uppercase font-bold opacity-90">
              Address
            </h1>
            <p className="mt-5 md:text-xl text-sm font-bold">
              124/4 Fulbaria <br /> uttara <br />
              Dhaka.1230
            </p>
            <strong className="md:text-xl text-sm">
              Phone:
              <span className="text-green-600 hover:underline hover:text-red-300">
                +8801710863690
              </span>
            </strong>
            <br />
            <strong className="md:text-xl text-sm ">
              Email:
              <span className="text-green-600 hover:underline hover:text-red-300">
                md.joshimu5@gmail.com
              </span>
            </strong>
          </div>
          <div>
            <h1 className="md:text-2xl text-xl uppercase font-bold opacity-90">
              Our Showroom
            </h1>
            <ul className="md:text-xl text-sm font-bold mt-5 opacity-90">
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Dhaka
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Mymensingh
                </span>
              </li>
              <li className="flex gap-1 items-center ">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Gazipur
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Rajshahi
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Chittagong
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="md:text-2xl text-xl uppercase font-bold opacity-90">
              Customer care
            </h1>

            <ul className="md:text-xl text-sm font-bold mt-5 opacity-90">
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Help-Center
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  How to Buy
                </span>
              </li>
              <li className="flex gap-1 items-center ">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Terms and Condition
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Refunds
                </span>
              </li>
              <li className="flex gap-1 items-center">
                <BsArrowRightShort className="text-green-500 text-3xl" />
                <span className="hover:underline hover:text-green-500 cursor-pinter">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="md:text-2xl text-xl uppercase font-bold opacity-90">
              Join our newsletter
            </h1>
            <p className="mt-5 md:text-xl text-sm font-bold opacity-90">
              join 2550+ dont miss the offer.please send your email
            </p>
            <form className="mt-8" action="">
              <div className="flex ">
                <input
                  className=" w-[120px] md:w-[300px]  focus:ring-gray-400 hover:outline-none focus:outline-none focus:ring-2  h-12 p-1 font-bold text-gray-700"
                  type="email"
                  placeholder="md.@example.com"
                />
                <button
                  className="flex hover:ring-1  hover:ring-gray-400 text-xl text-white opacity-100 font-bold 
                 justify-center bg-green-500 w-[70px] p-2"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="border-t flex justify-between 
         border-red-500 shadow-md mt-10 rounded-md  py-10 "
        >
          <div className="p-4 md:text-xl text-sm font-bold opacity-80">
            <ul>
              <li>
                <p>
                  copyright.Color <span className="text-green-500">Wear</span>
                  .All time deserved it
                </p>
              </li>
              <li>
                <p>
                  Design By.
                  <span className="text-green-500"> Joshim-uddin</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <ul className="flex gap-3 md:text-4xl text-2xl ">
              <li className="item  hover:translate-x-1  ">
                <Link to="/">
                  <FaFacebookF className="bg-white  rounded-full transition-all ease-in duration-500 text-blue-500 p-1 hover:bg-blue-500 hover:text-white" />
                </Link>
              </li>
              <li className="item hover:translate-x-1  ">
                <Link to="/">
                  <FaTwitter className="bg-white  rounded-full transition-all ease-in duration-500 text-blue-500 p-1 hover:bg-blue-500 hover:text-white" />
                </Link>
              </li>
              <li className="item hover:translate-x-1  ">
                <Link to="/">
                  <FaYoutube className="bg-red-500  rounded-full transition-all ease-in first-letter: duration-500 text-white p-1 hover:bg-white hover:text-red-500" />
                </Link>
              </li>
              <li className="item hover:translate-x-1  ">
                <Link to="/">
                  <FaInstagram className="bg-red-500  rounded-full transition-all ease-in first-letter: duration-500 text-white p-1 hover:bg-white hover:text-red-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
