import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Hero from "../pages/Home/Hero/Hero";
import Profile from "../pages/Profile/Profile";
import Login from "./../component/Authentic/Login";
import Register from "./../component/Authentic/Register";
import Catagory from "../pages/Home/catagory/Catagory";
import Newarrival from "../pages/Home/new arrival/Newarrival";
import Blogs from "../pages/Home/Blogs/Blogs";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";

import Products from "../pages/Product/Products";
import Sidebar from "../pages/Product/Sidebar/Sidebar";
import Filter from "./../pages/Product/Filter/Filter";
import Singleproduct2 from "../pages/Product/singleproduct/Singleproduct2";
import Productdetail from "../pages/Product/Productdetail/Productdetail";
import Features from "../pages/Featuers/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Hero",
        element: <Hero />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Catagory",
        element: <Catagory />,
      },
      {
        path: "/Newarrival",
        element: <Newarrival />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Sidebar",
        element: <Sidebar />,
      },
      {
        path: "/Filter",
        element: <Filter />,
      },
      {
        path: "/Singleproduct2",
        element: <Singleproduct2 />,
      },
      {
        path: "/Productdetail",
        element: <Productdetail />,
      },
      {
        path: "/Features",
        element: <Features />,
      },
    ],
  },
]);

export default router;
