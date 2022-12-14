/* eslint-disable react/prop-types */
import React from "react";
/* 
textPlaceholder : infos à mettre dans les placeholder des inputs
customWidth : la classe CSS qui gère la largeur des input
value: la valeur des inputs qu'on reçoit en props
methodOnChange : les fonctions associées aux input qu'on reçoit en props
*/
function InputTemplate({
  textPlaceholder,
  customWidth,
  value,
  methodOnChange,
  name,
}) {
  return (
    <label className={`cstm_styleInput ${customWidth}`}>
      <input
        className="focus:outline-none"
        type="text"
        placeholder={textPlaceholder}
        value={value}
        onChange={(e) => methodOnChange(e.target.name, e.target.value)}
        name={name}
      />
    </label>
  );
}

export default InputTemplate;
