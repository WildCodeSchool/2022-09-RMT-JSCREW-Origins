import React from "react";

// eslint-disable-next-line react/prop-types
function InputTemplate({ textPlaceholder, customWidth }) {
  return (
    <label className={`cstm_styleInput ${customWidth}`}>
      <input
        className="focus:outline-none"
        type="text"
        placeholder={textPlaceholder}
      />
    </label>
  );
}

export default InputTemplate;
