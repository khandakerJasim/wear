import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import women from "./../../../assets/Profile/women.jpg";
import man from "./../../../assets/Profile/joshim.jpg";
import { Link } from "react-router-dom";

export default function Catagory() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-cubic",
      once: true,
    });
  }, []);
  return (
    <div className="container relative md:flex  mt-10 gap-4 mb-10 md:gap-10 p-3 mx-auto">
      <div
        className="bg-cover bg-center h-72 md:h-[400px] mb-2 text-gray-100  w-full bg-no-repeat rounded-md flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${women})` }}
        data-aos="fade-up"
      >
        <div className="md:mt-[220px] mt-0">
          <p className="text-xl font-semibold  ">new in</p>
          <p className="text-4xl font-bold uppercase ">Women</p>
          <Link>
            <button className="bg-red-600 text-sm font-bold p-2 rounded-md mt-4  w-[100px]">
              shop now
            </button>
          </Link>
        </div>
      </div>

      <div
        className="bg-cover bg-center h-72 md:h-[400px] text-gray-100 w-full bg-no-repeat rounded-md flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${man})` }}
        data-aos="fade-left"
      >
        <div className="md:mt-[220px] mt-0">
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-xl font-semibold  "
          >
            new in
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-4xl font-bold uppercase "
          >
            MEN
          </p>
          <Link>
            <button
              data-aos="fade-up"
              data-aos-delay="4000"
              className="bg-red-600 text-sm font-bold p-2 rounded-md mt-4  w-[100px]"
            >
              shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
