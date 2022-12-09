import React, { useState, useEffect } from "react";
import SearchBar from "@components/SearchBar";

function Category() {
  const [myCategories, setMyCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setMyCategories(categories))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="flex flex-col w-full pt-10">
      <SearchBar data={myCategories} />
    </div>
  );
}

export default Category;
