import React from "react";
import Header from "@components/Header";
import ClientSliderHome from "@components/ClientSliderHome";

function Home() {
  return (
    <div className="bg-primary">
      <Header />
      <ClientSliderHome />
    </div>
  );
}

export default Home;
