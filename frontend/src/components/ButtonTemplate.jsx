/* eslint-disable react/prop-types */
import React from "react";

function ButtonTemplate({ buttonType, buttonStyle }) {
  return (
    <div>
      <button type="submit" className={`${buttonStyle}`}>
        {buttonType}
      </button>
    </div>
  );
}

export default ButtonTemplate;
