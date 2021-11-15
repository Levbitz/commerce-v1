import React from "react";
import Hero from "../../Component/Hero/Hero";
import Lorem from "../../Component/Lorem/Lorem";
import Navbar from "../../components/Navigationbar/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Lorem />

      <Lorem />
      <Lorem />
    </div>
  );
}

export default Home;
