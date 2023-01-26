import React from "react";
import TemplateCstmrSlider1 from "@components/TemplateCstmrSlider1";

function AllVideos() {
  return (
    <div className="flex flex-col items-center bg-primary w-full pt-20">
      <h1 className="my-5 text-white text-3xl text-xl">All videos</h1>
      <TemplateCstmrSlider1 url="/sliderCategory/1" />
      <TemplateCstmrSlider1 url="/sliderCategory/2" />
      <TemplateCstmrSlider1 url="/sliderCategory/3" />
      <TemplateCstmrSlider1 url="/sliderCategory/4" />
    </div>
  );
}

export default AllVideos;
