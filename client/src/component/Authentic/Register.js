import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [show, setshow] = useState(false);
  const [cshow, setcshow] = useState(false);
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [gender, setgender] = useState("Male");

  //navigation
  const navigate = useNavigate();

  const handlchange = (e) => {
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };

  //options
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  //handlesubmit

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = inputdata;
    if (name === "") {
      toast.error("please name is required");
    } else if (email === "") {
      toast.error("please email is required");
    } else if (!email.includes("@")) {
      toast.error("please valid email is required");
    } else if (phone === "") {
      toast.error("please phone is required");
    } else if (password === "") {
      toast.error("please password is required");
    } else if (cpassword === "") {
      toast.error("please confirm password is required");
    } else if (password !== cpassword) {
      toast.error("please password does not match");
    } else if (gender === "") {
      toast.error("please gender is required");
    } else {
      //console.log("registration successfull");
      const fetchdata = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          gender,
          password,
          cpassword,
        }),
      });
      const response = await fetchdata.json();
      if (response.status === 200) {
        setinputdata({
          ...inputdata,
          name: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        });
        setgender("");
        navigate("/");
      }
    }
  };

  return (
    <div className="w-full h-full bg-white  ">
      <div className="  grid justify-center m-auto pb-10">
        <h1 className="text-4xl pt-10 text-center text-gray-800 opacity-90  font-bold uppercase">
          Register your account
        </h1>

        <div className="mt-4 shadow-md  pb-10 w-[700px] ">
          <h1 className="text-3xl text-center text-gray-800 opacity-90  font-bold uppercase">
            Register
          </h1>
          <div className=" p-4 flex justify-center ">
            <form action="">
              <div className="flex flex-col gap-2 ">
                <label
                  className="pt-3 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  name
                </label>
                <input
                  className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={inputdata.name}
                  onChange={handlchange}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  className="pt-3 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  email
                </label>
                <input
                  className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={inputdata.email}
                  onChange={handlchange}
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label
                  className="pt-3 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  phone
                </label>
                <input
                  className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                  type="phone"
                  placeholder="enter your phone"
                  name="phone"
                  value={inputdata.phone}
                  onChange={handlchange}
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label
                  className="pt-3 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  Gender
                </label>
                <Select
                  onChange={(e) => setgender(e.value)}
                  options={options}
                />
              </div>

              <div className="flex mt-4 flex-col gap-2">
                <label
                  className="mt-2 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                    type={show ? "password" : "text"}
                    placeholder="enter your password"
                    name="password"
                    value={inputdata.password}
                    onChange={handlchange}
                  />
                  <div
                    onClick={() => setshow(!show)}
                    className="absolute right-1 top-1   m-auto text-center  p-1 bg-gray-500 text-white rounded-md text-xl font-bold"
                  >
                    {show ? "show" : "Hide"}
                  </div>
                </div>
              </div>

              <div className="flex mt-4 flex-col gap-2">
                <label
                  className="mt-2 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  confirm Password
                </label>
                <div className="relative">
                  <input
                    className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                    type={cshow ? "password" : "text"}
                    placeholder="enter your confirm password"
                    name="cpassword"
                    value={inputdata.cpassword}
                    onChange={handlchange}
                  />
                  <div
                    onClick={() => setcshow(!cshow)}
                    className="absolute right-1 top-1   m-auto text-center  p-1 bg-gray-500 text-white rounded-md text-xl font-bold"
                  >
                    {cshow ? "show" : "Hide"}
                  </div>
                </div>
              </div>

              <button
                onClick={handlesubmit}
                className="uppercase rounded-md cursor-pointer text-2xl mt-12 font-bold p-2 text-white text-center w-full bg-blue-500 "
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex justify-center mt-10">
            <h1 className="text-lg font-semibold opacity-80">
              Dont have an account?
              <span className="text-blue-500 text-xl hover:underline">
                <Link to="/Login">Login.</Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
