import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import { CartState } from "../Context/Cartcontex";
import { AiFillDelete } from "react-icons/ai";

export default function Navbar() {
  const [open, setopen] = useState(false);
  const [profileopen, setprofileopen] = useState(false);
  const [isopen, setisopen] = useState(false);
  const dropdownref = useRef(null);
  const [selected, setselectd] = useState("");
  const [scroll, setscroll] = useState(false);

  const handleselect = (value) => {
    setselectd(value);
  };

  const handlescrolled = () => {
    if (window.scrollY > 0) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  window.addEventListener("scroll", handlescrolled);
  const {
    state: { Cart },
    dispatch,
  } = CartState();

  return (
    <div
      className={` bg-gray-700  ${
        scroll ? "duration-300 delay-200" : "bg-transparent text-black"
      } sticky  top-0 z-50  `}
    >
      <header className="   p-10 w-full h-[90px] flex justify-between sticky top-0 z-50 items-center bg-transparent">
        <div className="flex justify-between gap-3 items-center">
          <div>
            <img
              className="w-[70px] h-[70px]  rounded-full"
              src="https://img.freepik.com/free-psd/live-streaming-3d-render-icon_47987-9053.jpg?size=626&ext=jpg&ga=GA1.2.684431325.1694787217&semt=ais"
              alt=""
            />
          </div>
          <div className="md:text-3xl opacity-100 text-md font-bold">
            <Link className="flex gap-1" to="/">
              <p>joshim</p>
              <span className="text-green-500">uddin</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-10">
          <ul
            className={`
            md:flex gap-4 text-xl font-bold transition-all ease-in duration-1000 opacity-90 absolute top-[120px] left-0 md:static ${
              open ? "opacity-90 " : "left-[-1400px]"
            }`}
          >
            <li
              className={`${selected === "Home" && "border-b border-red-500"}`}
              onClick={() => handleselect("Home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => handleselect("About")}
              className={`${
                selected === "About" && "border-b border-red-500"
              } md:my-0 my-4 bg-transparent relative before:content-['']`}
            >
              <Link to="/About">About</Link>
            </li>
            <li
              onClick={() => handleselect("Product")}
              className={`${
                selected === "Product" && "border-b border-red-500"
              } md:my-0 bg-transparent relative before:content-['']`}
            >
              <Link to="/Products">Product</Link>
            </li>
            <li
              className={`${
                selected === "Features" && "border-b border-red-500"
              }`}
              onClick={() => handleselect("Features")}
            >
              <Link to="/Features">Features</Link>
            </li>
            <li
              className={`${
                selected === "Contact" && "border-b border-red-500"
              }`}
              onClick={() => handleselect("Contact")}
            >
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="absolute top-3 right-5 text-2xl md:hidden ">
            <button onClick={() => setopen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/**profile */}
        <div>
          <Link>
            <button>Login</button>
          </Link>
        </div>

        <div className=" ">
          <div className="absolute right-16 md:top-0 flex items-center md:relative top-4">
            <div>
              {isopen && (
                <ul
                  ref={dropdownref}
                  className="absolute right-3 mt-9 py-2
                   w-80 bg-gray-300 text-gray-700 rounded-md shadow-md p-3 border"
                >
                  {Cart.length > 0 ? (
                    <>
                      {Cart.map((prod) => (
                        <div
                          key={prod.id}
                          className="flex items-center border-b p-1 space-x-2"
                        >
                          <img
                            className="rounded-full w-10 h-10"
                            src={prod.image1}
                            alt=""
                          />
                          <div className="  items-center">
                            <Link to={`/Products/${prod.id}`}>
                              <p className="text-sm">{prod.name}</p>
                            </Link>
                            <p className="hover:text-red-500">{prod.price}$</p>
                          </div>
                          <AiFillDelete
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                            className="absolute  right-4 text-xl cursor-pointer"
                          />
                        </div>
                      ))}
                      <Link to="/">
                        <button className=" flex m-auto py-2 text-md bg-blue-400 p-1 mt-2 rounded-md text-white text-center">
                          process to cart
                        </button>
                      </Link>
                    </>
                  ) : (
                    <div className="m-auto text-center flex justify-center">
                      <span>The card is Empty</span>
                    </div>
                  )}
                </ul>
              )}
            </div>

            <button>
              <AiOutlineShoppingCart
                onClick={() => setisopen(!isopen)}
                className="text-2xl  my-4 md:my-0 md:ml-5"
              />
            </button>
            <p className="text-sm font-bold text-green-500">({Cart.length})</p>
          </div>
        </div>
      </header>
    </div>
  );
}
