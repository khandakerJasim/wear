import React, { useEffect, useState } from "react";
import image from "./../../assets/Profile/women.jpg";
import Aos from "aos";
import { postcontactfunc } from "../../service/Apis";

export default function Contact() {
  const [input, setinput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-cubic",
      once: true,
    });
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = input;
    if (name === "") {
      return alert("please name input");
    } else if (email === "") {
      alert("please email is required");
    } else if (phone === "") {
      alert("please phone is required");
    } else if (message === "") {
      alert("please message is required");
    } else {
      //console.log("registration successfull");
      // const data = new FormData();
      // data.append("name", name);
      // data.append("email", email);
      // data.append("phone", phone);
      // data.append("message", message);
      // const config = {
      //   "Content-Type": "application/json",
      // };
      // const res = await postcontactfunc(config, data);
      // console.log(res);
      const fetchdata = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const res = await fetchdata.json();
      //console.log(res);
      if (res.status === 200) {
        //localStorage.setItem("data", res.saveuser);
        setinput({ ...input, name: "", email: "", phone: "", message: "" });
      }
    }
  };
  return (
    <div className=" h-full w-full  bg-gray-100 p-4  ">
      <div className="pt-10">
        <h1
          className="text-center text-4xl text-gray-700 font-extrabold bg-transparent mb-5 relative uppercase     before:bottom-0 before:left-0 before:bg-red-500
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
          before:transition before:ease-in-out before:duration-300  "
        >
          Contact us
        </h1>
      </div>

      <div className=" container mt-14 relative mx-auto   ">
        <img
          className="h-[400px] w-[1200px] object-cover filter blur-sm"
          src={image}
          alt=""
        />

        <div className=" mx-auto mt-10   max-w-screen-md  ">
          <h1 className=" tracking-tight text-3xl font-bold opacity-80 ">
            wear <span className="text-blue-700 opacity-90">fashion</span>
          </h1>
          <h1 className="mt-3 text-sm md:text-xl fonnt-extrabold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            beatae ad placeat cumque libero nihil velit earum aspernatur,
            blanditiis a soluta iste odit itaque consectetur voluptas incidunt
            ducimus at dignissimos maiores porro. Animi hic odit optio placeat
            corrupti, sequi ut explicabo minus non! Vel velit maiores, similique
            dolor, porro at fugiat modi praesentium aspernatur nam ut architecto
            minima quos quas adipisci doloribus quidem quaerat! Laborum cum
            facilis distinctio quaerat odit aut officia! Atque, excepturi
            assumenda ipsa fugiat unde libero necessitatibus eum aperiam vel
            dolorem delectus animi deleniti quia illo facilis aspernatur,
            exercitationem vero at blanditiis. Repudiandae, qui eius? Magnam,
            ea?
          </h1>

          <form className="mt-7 pb-10 " action="">
            <div className="flex flex-col">
              <label
                className="upercase text-xl font-semibold opacity-90"
                htmlFor=""
              >
                name:
              </label>
              <input
                className=" md:w-[500px] mt-2 h-12 p-2 rounded-md bg-gray-300 text-gray-800 w-auto hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 "
                type="text"
                placeholder="Enter your name"
                name="name"
                value={input.name}
                onChange={handlechange}
              />
            </div>
            <div className="flex mt-4 flex-col">
              <label
                className="upercase text-xl font-semibold opacity-90"
                htmlFor=""
              >
                Email
              </label>
              <input
                className=" md:w-[500px] mt-2 h-12 p-2 rounded-md bg-gray-300 text-gray-800 w-auto hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 "
                type="email"
                placeholder="Enter your email"
                name="email"
                value={input.email}
                onChange={handlechange}
              />
            </div>
            <div className="flex mt-4 flex-col">
              <label
                className="upercase text-xl font-semibold opacity-90"
                htmlFor=""
              >
                phone
              </label>
              <input
                className=" md:w-[500px] mt-2 h-12 p-2 rounded-md bg-gray-300 text-gray-800 w-auto hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 "
                type="phone"
                placeholder="Enter your phone"
                name="phone"
                value={input.phone}
                onChange={handlechange}
              />
            </div>
            <div className="flex mt-4 flex-col">
              <label
                className="upercase text-xl font-semibold opacity-90"
                htmlFor=""
              >
                message
              </label>
              <textarea
                className=" md:w-[500px] mt-2  p-2 rounded-md bg-gray-300 text-gray-800 w-auto hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 "
                id=""
                cols="30"
                rows="10"
                placeholder="message..."
                name="message"
                value={input.message}
                onChange={handlechange}
              />
            </div>
            <button
              onClick={handlesubmit}
              // data-aos="fade-up"
              // data-aos-delay="400"
              className="text-2xl font-extrabold bg-red-500 text-white p-1 rounded-md m-auto  mt-6"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
