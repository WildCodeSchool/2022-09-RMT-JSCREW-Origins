/* eslint-disable react/prop-types */
import React from "react";

function TextareaTemplate({ textPlaceholder, customWidth }) {
  return (
    <textarea
      className={`cstm_styleInput ${customWidth}`}
      placeholder={textPlaceholder}
      rows="5"
    />
  );
}

export default TextareaTemplate;
