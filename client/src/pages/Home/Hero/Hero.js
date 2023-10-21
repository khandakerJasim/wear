import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "./../../../assets/banner/full-shot-woman-online-fashion-shopping.jpg";
import img2 from "./../../../assets/banner/laura-chouette-lYFWRIwOj9c-unsplash.jpg";
import img3 from "./../../../assets/banner/online-fashion-shopping-with-smartphone.jpg";
import img4 from "./../../../assets/banner/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg";
export default function Hero() {
  const imgslide = [
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
    <div className="relative z-0  mb-2">
      <Swiper
        className="w-full"
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {imgslide.map((img) => (
          <SwiperSlide key={img.id}>
            <div
              className="bg-cover md:h-[850px] h-[350px] bg-no-repeat flex flex-col justify-center"
              style={{ backgroundImage: `url(${img.image})` }}
            >
              <div className=" d-block pl-[100px]">
                <h1 className="text-[60px] font-bold text-green-500">
                  new amazing Products
                </h1>

                <div className="flex pl-[50px] m-auto ml-[100px]">
                  <button
                    className="mt-9   bg-red-500 rounded-md font-semibold 
                 text-white w-auto p-2  text-4xl flex justify-center"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
