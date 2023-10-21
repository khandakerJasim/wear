import React, { useEffect, useState } from "react";
import { CartState } from "../../component/Context/Cartcontex";

export default function Cart() {
  const {
    state: { Cart },
    dispatch,
  } = CartState();

  const [total, settotal] = useState();

  useEffect(() => {
    settotal(
      Cart.reduce((acc, crr) => 20 + acc + Number(crr.price) * crr.qty, 0)
    );
  }, [Cart]);
  return (
    <div className="bg-gray-200 w-full h-full">
      <div className="mx-10 pt-10">
        <h1 className="text-3xl font-bold text-gray-700  before:bottom-0 text-center bg-transparent  relative before:left-0 m-auto before:content-[''] before:bg-red-500 before:h-[2px] before:w-full before:absolute before:block before:transition-all before:ease-in before:duration:1000 before:hover:scale-x-100  before:scale-x-0 before:origin-top-middle">
          Booking page
        </h1>
        <h1 className="mt-3 text-center text-xl text-gray-700 font-extrabold">
          Details about your products
        </h1>
        <div className="mt-6">
          {Cart.length > 0 ? (
            <div className="container mx-auto lg:w-[400px]">
              <div className="flex w-full">
                <div className="w-full">
                  <h1>products Details</h1>
                </div>
                <div className="w-full flex justify-between">
                  <h1>Gender</h1>
                  <h1>Price</h1>
                  <h1>Quantity</h1>
                  <h1>Total</h1>
                  <h1>Delete</h1>
                </div>
              </div>
              {Cart.map((prod) => (
                <div key={prod.id}>
                  <img src={prod.image} alt="" />
                </div>
              ))}
            </div>
          ) : (
            <div>product not found</div>
          )}
        </div>
      </div>
    </div>
  );
}
