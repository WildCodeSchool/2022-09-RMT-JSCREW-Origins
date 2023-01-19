import Slider3Template from "@components/Slider3Template";
import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-10 w-full">
      <div className="flex flex-col items-center gap-2">
        <h2>Slider 1</h2>
        <Slider3Template sliderId={2} searchBarWidth="w-4/5" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider 2</h2>
        <Slider3Template sliderId={3} searchBarWidth="w-4/5" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider 3</h2>
        <Slider3Template sliderId={4} searchBarWidth="w-4/5" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider 4</h2>
        <Slider3Template sliderId={5} searchBarWidth="w-4/5" />
      </div>
    </div>
  );
}

export default Grid;
