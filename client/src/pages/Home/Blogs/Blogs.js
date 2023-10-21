import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      name: "watch",
      image:
        "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?size=626&ext=jpg&ga=GA1.1.1482089569.1695025956&semt=sph",
      description: "lorem20 we erw jklg jsnloikn timjk",
      date: "11 march 2023",
      prize: 10000,
    },
    {
      id: 2,
      name: "shoe",
      image:
        "https://img.freepik.com/free-photo/derby-shoes-men-formal-wear_53876-96609.jpg?size=626&ext=jpg&ga=GA1.2.1482089569.1695025956&semt=sph",
      description: "this is thje powerfull item for girls",
      date: "11 march 2023",
      prize: 10000,
    },
    {
      id: 3,
      name: "Belt",
      image:
        "https://img.freepik.com/free-photo/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accesories-hands_158538-9450.jpg?size=626&ext=jpg&ga=GA1.1.1482089569.1695025956&semt=sph",
      description: "lorem20 w er klt kal ki ho batt",
      date: "11 march 2023",
      prize: 10000,
    },
    {
      id: 4,
      name: "Bags",
      image:
        "https://img.freepik.com/free-vector/realistic-travel-horizontal-banner-suitcases-beach-umbrellas-other-attributes-tourism-gathered-together-vector-illustration_1284-81822.jpg?size=626&ext=jpg&ga=GA1.2.1482089569.1695025956&semt=sph",
      description: "lorem20 we erw jklg jsnloikn timjk",
      date: "11 march 2023",
      prize: 10000,
    },
    {
      id: 5,
      name: "Shirt",
      image:
        "https://img.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup-03_126278-131.jpg?size=626&ext=jpg&ga=GA1.1.1482089569.1695025956&semt=sph",
      description: "lorem20 we erw jklg jsnloikn timjk",
      date: "11 march 2023",
      prize: 10000,
    },
  ];
  return (
    <div className="h-full w-full p-10 bg-gray-600 text-white">
      <div className="pt-10">
        <h1 className="text-center uppercase m-auto text-4xl font-bold opacity-90 before:bg-red-500 before:w-full before:h-[2px] before:absolute before:block  before:left-0 before:mt-12 before:ease-in-out before:hover:scale-x-95 before:scale-x-0 before:transition-all before:duration-1000">
          Blogs
        </h1>
        <h1 className="mt-4 text-center text-xl font-semibold opacity-80">
          new blogs to fight out
        </h1>

        <Swiper
          className="swiper mt-10"
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {blogs.map(({ id, image, description, prize, date, name }) => (
            <SwiperSlide key={id}>
              <div className="border border-red-500  rounded-md ">
                <div className=" overflow-hidden mt-10  rounded-md">
                  <img
                    src={image}
                    className=" h-[300px]  object-cover w-[300px] m-auto text-center p-4 hover:scale-125 transition-all rounded-3xl"
                    alt=""
                  />

                  <div className="mt-2 p-4">
                    <h1 className="he text-sm font-semibold opacity-90 ">
                      {name}
                      <span> {date}</span>
                    </h1>

                    <h1>{description}</h1>
                    <button className="bg-red-400 m-auto rounded-md text-white mt-10 text-sm font-bold p-2 rounded-mw-[100px] ">
                      +Read more
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link to="/">
          <button
            data-aos="fade-up"
            data-aos-delay=""
            className="bg-red-600 m-auto flex justify-center text-white mt-10 text-sm font-bold p-2 rounded-md   w-[100px]"
          >
            view more
          </button>
        </Link>
      </div>
    </div>
  );
}
