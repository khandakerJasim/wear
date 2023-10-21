import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cartreducer, productReducer } from "./Reducer";

export const Cartdata = createContext();

const Cartcontex = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  });
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  }, [products]);

  const [state, dispatch] = useReducer(Cartreducer, {
    products: products,
    Cart: [],
    productdetails: [],
  });

  //single productge

  const fetchproductdetails = async (id) => {
    try {
      const fetchdata = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await fetchdata.json();

      dispatch({ type: "GET_PRODUCT_BYID", payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchproductdetails();
  });

  const [productstate, productdispatch] = useReducer(productReducer, {
    bygender: "",
    bytype: "",
    bycatagory: "",
    byrating: 0,
    byfastdelivery: false,
    bystock: false,
    bysearchquery: "",
  });

  return (
    <div>
      <Cartdata.Provider
        value={{
          state,
          dispatch,
          productstate,
          productdispatch,
          fetchproductdetails,
        }}
      >
        {children}
      </Cartdata.Provider>
    </div>
  );
};

export const CartState = () => {
  return useContext(Cartdata);
};
export default Cartcontex;
