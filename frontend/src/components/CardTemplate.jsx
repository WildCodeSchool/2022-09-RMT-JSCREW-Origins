import React from "react";

function cardTemplate({ data, handleDeleteCard }) {
  const genericLine = `h-1 w-3 my-1 rounded-full bg-white transition`;

  return (
    <div className="bg-primary text-white rounded-lg px-3 py-2 mb-8 relative">
      <h2>{data.Name}</h2>
      <button
        type="button"
        className="bg-secondary absolute rounded-full p-1 w-6 h-6 -top-4 -right-4 border-2 border-white"
        onClick={() => handleDeleteCard(data.id)}
      >
        <div className={`${genericLine} rotate-45 translate-y-0 opacity-95`} />
        <div
          className={`${genericLine} -rotate-45 -translate-y-2 opacity-95`}
        />
      </button>
    </div>
  );
}

export default cardTemplate;
