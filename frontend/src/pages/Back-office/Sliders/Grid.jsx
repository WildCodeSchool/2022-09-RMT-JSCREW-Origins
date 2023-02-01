import React from "react";
import { Helmet } from "react-helmet";
import SliderByCatTemplate from "@components/SliderByCatTemplate";

function Grid() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's Dashboard - Grid</title>
        <meta
          name="description"
          content="Manage the video grid page. Add, edit, and delete videos to keep the grid up-to-date and relevant."
        />
      </Helmet>
      <div className="grid grid-cols-2 gap-4 pt-10 w-full">
        <div className="flex flex-col items-center gap-2">
          <h2>Slider 1</h2>
          <SliderByCatTemplate sliderId={2} searchBarWidth="w-4/5" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2>Slider 2</h2>
          <SliderByCatTemplate sliderId={3} searchBarWidth="w-4/5" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2>Slider 3</h2>
          <SliderByCatTemplate sliderId={4} searchBarWidth="w-4/5" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2>Slider 4</h2>
          <SliderByCatTemplate sliderId={5} searchBarWidth="w-4/5" />
        </div>
      </div>
    </>
  );
}

export default Grid;
