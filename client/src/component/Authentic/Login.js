import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [show, setshow] = useState(false);

  const [input, setinput] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { username, password } = input;

    if (username === "") {
      toast.error("please username required");
    } else if (password === "") {
      toast.error("please valid password reuireds");
    } else {
      //console.log("login successfully");
      const fetchdata = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const response = await fetchdata.json();
      //console.log(response);
      if (response.status === 200) {
        setinput({
          username: "",
          password: "",
        });
        navigate("/");
      }
    }
  };
  return (
    <div className="w-full h-full bg-white ">
      <div className="  grid justify-center m-auto  pb-10">
        <h1 className="text-4xl pt-10 text-center text-gray-800 opacity-90  font-bold uppercase">
          Login your account
        </h1>

        <div className="mt-4 shadow-md p-4 w-[700px] ">
          <h1 className="text-3xl text-center text-gray-800 opacity-90  font-bold uppercase">
            Login
          </h1>
          <div className=" p-4 flex justify-center ">
            <form action="">
              <div className="flex flex-col gap-2 ">
                <label
                  className="pt-3 text-2xl font-semibold text-gray-800 opacity-90"
                  htmlFor=""
                >
                  Username
                </label>
                <input
                  className="h-12 w-[400px] bg-gray-100 text-gray-700 p-2 focus:outline-none hover:outline-none hover:ring-1 hover:ring-gray-700 focus:ring-1 rounded-md text-xl font-semibold focus:ring-gray-800"
                  type="email"
                  placeholder="enter your email or phone"
                  name="username"
                  value={input.username}
                  onChange={handlechange}
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
                    placeholder="enter your email or phone"
                    name="password"
                    value={input.password}
                    onChange={handlechange}
                  />
                  <div
                    onClick={() => setshow(!show)}
                    className="absolute right-1 top-1   m-auto text-center  p-1 bg-gray-500 text-white rounded-md text-xl font-bold"
                  >
                    {show ? "show" : "Hide"}
                  </div>
                </div>
              </div>
              <button
                onClick={handlesubmit}
                className="uppercase rounded-md cursor-pointer text-2xl mt-12 font-bold p-2 text-white text-center w-full bg-blue-500 "
              >
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-around mt-10">
            <h1 className="text-lg font-semibold opacity-80">
              Dont have an account?
              <span className="text-blue-500 hover:underline">
                <Link to="/Register">Register.</Link>
              </span>
            </h1>
            <h1 className="text-lg font-semibold text-blue-500 hover:underline">
              <Link>Forget Password?</Link>
            </h1>
          </div>
          {/** login with facebook google */}

          <div className="mt-10">
            <h1 className="text-center text-2xl font-semibold text-gray-800 opacity-90">
              Login with Facebook or Google
            </h1>
            <div className="flex gap-4 text-4xl justify-center mt-4">
              <Icon
                icon="logos:facebook"
                width="40px"
                className="icon hover:translate-x-2 animate-bounce"
              />
              <Icon
                className="hover:translate-x-2 animate-bounce"
                icon="devicon:google"
                width="40px"
              />
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}
