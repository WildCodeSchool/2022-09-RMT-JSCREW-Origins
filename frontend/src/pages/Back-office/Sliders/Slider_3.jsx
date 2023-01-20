import React from "react";
import Slider3Template from "@components/Slider3Template";

function Slider3() {
  return (
    <div className="flex flex-col items-center w-full pt-10">
      <Slider3Template sliderId={1} searchBarWidth="cstm_width_XlInput" />
    </div>
  );
}

export default Slider3;
