/* eslint-disable react/prop-types */
import React from "react";

function TextareaTemplate({ textPlaceholder, customWidth }) {
  return (
    <textarea
      className={`border-solid border-primary border-2 rounded-md p-3 ${customWidth}`}
      placeholder={textPlaceholder}
      rows="5"
    />
  );
}

export default TextareaTemplate;
