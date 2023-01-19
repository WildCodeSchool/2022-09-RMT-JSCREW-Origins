import Slider3Template from "@components/Slider3Template";
import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-10 w-full">
      <div className="flex flex-col items-center gap-2">
        <h2>Slider number 1</h2>
        <Slider3Template sliderId={2} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider number 2</h2>
        <Slider3Template sliderId={3} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider number 3</h2>
        <Slider3Template sliderId={4} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Slider number 4</h2>
        <Slider3Template sliderId={5} />
      </div>
    </div>
  );
}

export default Grid;
