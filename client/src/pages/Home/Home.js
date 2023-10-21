import React from "react";
import Hero from "./Hero/Hero";
import Catagory from "./catagory/Catagory";
import Newarrival from "./new arrival/Newarrival";
import Blogs from "./Blogs/Blogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Catagory />
      <Newarrival />
      <Blogs />
    </div>
  );
}
