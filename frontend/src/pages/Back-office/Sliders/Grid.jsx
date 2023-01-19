import Slider3Template from "@components/Slider3Template";
import React from "react";

function Grid() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div>
        <Slider3Template sliderId={2} />
      </div>
      <div>
        <Slider3Template sliderId={3} />
      </div>
      <div>
        <Slider3Template sliderId={4} />
      </div>
      <div>
        <Slider3Template sliderId={5} />
      </div>
    </div>
  );
}

export default Grid;
