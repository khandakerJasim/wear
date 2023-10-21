import React from "react";

import router from "./Route/Router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
