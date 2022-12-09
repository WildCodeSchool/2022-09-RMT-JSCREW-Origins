import React from "react";

// eslint-disable-next-line react/prop-types
function InputTemplate({ textPlaceholder, customWidth }) {
  return (
    <label
      className={`border-solid border-primary border-2 rounded-md p-3 ${customWidth}`}
    >
      <input
        className="focus:outline-none"
        type="text"
        placeholder={textPlaceholder}
      />
    </label>
  );
}

export default InputTemplate;
