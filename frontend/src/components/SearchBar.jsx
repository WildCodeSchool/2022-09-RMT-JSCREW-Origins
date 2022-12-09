import React, { useEffect, useState } from "react";

function SearchBar() {
  const [displayCategory, setDisplayCategory] = useState(false);
  const [myCategories, setMyCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);
  return (
    <form className="flex flex-col items-center w-full">
      <label className="border-solid border-primary border-2 rounded-md p-3 w-3/4 lg:w-7/12 relative">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Search game"
        />
        <button
          onClick={() => setDisplayCategory(!displayCategory)}
          className="bg-primary text-white text-base rounded-md p-2 absolute absolute right-1 bottom-1 hover:bg-secondary hover:text-primary"
          type="button"
        >
          See all games
        </button>
      </label>
      {displayCategory && (
        <div className="bg-primary w-3/4 lg:w-7/12 rounded-md">
          <ul className="flex flex-col">
            {myCategories.map((myCategory) => (
              <button
                type="button"
                key={myCategory.id}
                className="text-white text-base self-start py-3 pl-5 hover:text-secondary hover:bg-white hover:bg-opacity-5 w-full flex"
              >
                {myCategory.Name}
              </button>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
