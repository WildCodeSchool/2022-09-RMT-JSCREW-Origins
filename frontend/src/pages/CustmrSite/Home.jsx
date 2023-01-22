import React from "react";
import Header from "@components/Header";
import TemplateCstmrSlider1 from "@components/TemplateCstmrSlider1";

function Home() {
  return (
    <div className="bg-primary">
      <Header />
      <TemplateCstmrSlider1 url="/slider" />
    </div>
  );
}

export default Home;
