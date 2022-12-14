import React from "react";

// eslint-disable-next-line react/prop-types
function InputTemplate({ textPlaceholder, customWidth, value }) {
  return (
    <label className={`cstm_styleInput ${customWidth}`}>
      <input
        className="focus:outline-none"
        type="text"
        placeholder={textPlaceholder}
        value={value}
      />
    </label>
  );
}

export default InputTemplate;
