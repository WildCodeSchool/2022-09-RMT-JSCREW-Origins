/* eslint-disable react/prop-types */
import React from "react";

function TextareaTemplate({ textPlaceholder, customWidth, value }) {
  return (
    <textarea
      className={`cstm_styleInput ${customWidth}`}
      placeholder={textPlaceholder}
      value={value}
      rows="5"
    />
  );
}

export default TextareaTemplate;
