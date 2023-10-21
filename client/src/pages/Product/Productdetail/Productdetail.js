import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../../../component/Context/Cartcontex";

export default function Productdetail() {
  const id = useParams();
  const {
    state: { Cart, productdetails },
    dispatch,
    fetchproductdetails,
  } = CartState();

  try {
    useEffect(() => {
      if (id && id !== "") {
        fetchproductdetails(id);
      }
    }, [id]);

    console.log(productdetails);
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="w-full h-full mx-auto">
      <div>
        {productdetails && (
          <div>
            <img src={productdetails.image2} alt="" />
          </div>
        )}
      </div>
      <h1>i am Product details component</h1>
    </div>
  );
}
