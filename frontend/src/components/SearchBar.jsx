import React from "react";

function SearchBar() {
  return (
    <form className="flex flex-col items-center w-full">
      <input
        className="border-solid border-primary border-2 rounded-md p-2 w-3/4"
        type="text"
        placeholder="Choose game"
      />
      <div>
        <ul>
          <li>test</li>
        </ul>
      </div>
    </form>
  );
}

export default SearchBar;
