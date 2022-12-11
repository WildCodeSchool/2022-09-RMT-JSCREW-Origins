/* eslint-disable react/prop-types */
import React from "react";

function ButtonTemplate({ buttonType }) {
  return (
    <div>
      <button className="text-base" type="submit">
        {buttonType}
      </button>
    </div>
  );
}

export default ButtonTemplate;
