import React from "react";

const tests = ["tes1", "test2", "test3", "test4"];

function SearchBar() {
  return (
    <form className="flex flex-col items-center w-full">
      <label className="border-solid border-primary border-2 rounded-md p-3 w-3/4 relative">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Search game"
        />
        <button
          className="bg-primary text-white rounded-md p-1 absolute absolute right-1 bottom-0.5"
          type="button"
        >
          Search
        </button>
      </label>
      <div className="bg-primary w-3/4 rounded-md">
        <ul className="flex flex-col">
          {tests.map((test) => (
            <li className="text-white py-3 pl-5 hover:text-secondary">
              {test}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default SearchBar;
