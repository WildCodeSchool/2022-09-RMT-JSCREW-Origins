/* eslint-disable react/prop-types */
import React from "react";

function ButtonTemplate({ buttonType, buttonText, buttonStyle }) {
  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={buttonType} className={`${buttonStyle}`}>
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonTemplate;
