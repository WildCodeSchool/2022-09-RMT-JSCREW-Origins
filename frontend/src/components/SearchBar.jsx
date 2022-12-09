import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function SearchBar({ data, textPlaceholder, textButton, searchBarContainer }) {
  const [displayData, setDisplayData] = useState(false);
  const [searchData, setSearchData] = useState("");
  const handleDisplayData = (e) => {
    setSearchData(e.target.value);
    if (searchData.length >= 0) {
      setDisplayData(true);
    } else if (searchData.length === 0) {
      setDisplayData(false);
    }
  };
  return (
    <div className={searchBarContainer}>
      <label className="border-solid border-primary border-2 rounded-md p-3 w-3/4 lg:w-7/12 relative">
        <input
          onChange={handleDisplayData}
          className="focus:outline-none"
          type="text"
          placeholder={textPlaceholder}
          value={searchData}
        />
        <button
          onClick={() => setDisplayData(!displayData)}
          className={`bg-primary text-white text-base rounded-md p-2 absolute right-1 bottom-1 hover:bg-secondary hover:text-primary ${
            displayData && "focus:bg-secondary focus:text-primary"
          }`}
          type="button"
        >
          {!displayData ? `Show ${textButton}` : `Hide ${textButton}`}
        </button>
      </label>
      {displayData && (
        <div className="bg-primary w-3/4 lg:w-7/12 rounded-md">
          <ul className="flex flex-col">
            {data
              // eslint-disable-next-line react/prop-types
              .filter((myData) => myData.Name.startsWith(searchData))
              .map((myData) => (
                <button
                  type="button"
                  key={myData.id}
                  className="text-white text-base self-start py-3 pl-5 hover:text-secondary hover:bg-white hover:bg-opacity-5 w-full flex"
                >
                  {myData.Name}
                </button>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
