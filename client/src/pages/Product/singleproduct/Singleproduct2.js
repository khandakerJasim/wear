import React from "react";
import { CartState } from "../../../component/Context/Cartcontex";
import { Link } from "react-router-dom";
import Hovereffect from "../HoverEffect/Hovereffect";
import Rating from "../Rating/Rating";

export default function Singleproduct2({ prod }) {
  const {
    state: { Cart },
    dispatch,
  } = CartState();

  return (
    <div className="w-full bg-gray-200">
      <div className="pb-4">
        <Link to="">
          <Hovereffect src1={prod.image1} src2={prod.image2} />
        </Link>
        <div className="flex flex-col p-2">
          <div className="flex justify-between  text-sm items-center ">
            <h1 className="hidden rounded-full p-1 bg-gray-300 md:block">
              totalstock: {prod.inStock}
            </h1>
            <h1 className="rounded-full p-1 bg-green-500 text-gray-700">
              {prod.fastDelivery ? "fast delivery" : "4 daysdelivery"}
            </h1>
          </div>
          <h1 className="text-md opacity-90 font-semibold">{prod.name}</h1>
          <h1 className="hover:text-red-500">
            price: <span className="font-bold text-sm">{prod.price}$</span>
          </h1>
          <div>
            <Rating rating={prod.rating} />
          </div>

          <div className=" text-center  mt-4">
            {Cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
                className="bg-green-500 p-2 rounded-md text-white"
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "ADD_DATA_CART", payload: prod })
                }
                disabled={!prod.inStock}
                className={` ${!prod.inStock} text-white p-1 rounded-md`}
              >
                {!prod.inStock ? (
                  <div className="bg-gray-800 text-gray-100 rounded-md p-2">
                    out of sotck
                  </div>
                ) : (
                  <div className="bg-red-500 rounded-md p-2">
                    Add data to Cart
                  </div>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
