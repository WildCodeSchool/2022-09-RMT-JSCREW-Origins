import React from "react";

function cardTemplate({ videoName }) {
  return (
    <div className="bg-primary text-white rounded-lg px-3 py-2 mb-8">
      <h2>{videoName}</h2>
    </div>
  );
}

export default cardTemplate;
