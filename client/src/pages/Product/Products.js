import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Filter from "./Filter/Filter";
import { CartState } from "../../component/Context/Cartcontex";
import Singleproduct2 from "./singleproduct/Singleproduct2";

export default function Products() {
  const {
    state: { products },
    // productstate: {
    //   sort,
    //   bystock,
    //   byfirstdelivery,
    //   bygender,
    //   bytype,
    //   bycatagory,
    //   byrating,
    //   bysearchquery,
    // },
  } = CartState();
  // const transferproduct = () => {
  //   let sortedproduct = products;
  //   if (sort) {
  //     sortedproduct = sortedproduct.sort((a, b) =>
  //       sort === "LOWTOHIGH" ? a.price - b.price : b.price - a.price
  //     );
  //   }
  //   if (!bystock) {
  //     sortedproduct = sortedproduct.filter((prod) => prod.instock);
  //   }
  //   if (!byfirstdelivery) {
  //     sortedproduct = sortedproduct.filter((prod) => prod.byfirstdelivery);
  //   }
  //   if (bygender) {
  //     sortedproduct = sortedproduct.filter((prod) => prod.gender === bygender);
  //   }
  //   if (bytype) {
  //     sortedproduct = sortedproduct.filter((prod) => prod.type === bytype);
  //   }
  //   if (bycatagory) {
  //     sortedproduct = sortedproduct.filter(
  //       (prod) => prod.bycatagory === bycatagory
  //     );
  //   }
  //   if (byrating) {
  //     sortedproduct = sortedproduct.filter((prod) => prod.rating >= byrating);
  //   }
  //   if (bysearchquery) {
  //     sortedproduct = sortedproduct.filter((prod) =>
  //       prod.name.toLowerCase().includes(bysearchquery)
  //     );
  //   }
  //   return sortedproduct;
  // };
  return (
    <div className="w-full h-full mx-auto ">
      <div className=" md:flex grid md:p-10 p-2 gap-6 md:gap-10">
        <div className="side md:w-2/6 lg:w-3/12">
          <Sidebar />
        </div>
        <div className="w-full">
          <Filter />
          <div className="grid grid-cols-2 md:grid-cols-3 mt-4 lg:grid-cols-4 gap-5">
            {products.map((prod) => (
              <Singleproduct2 prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
