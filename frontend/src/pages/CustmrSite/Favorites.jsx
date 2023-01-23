import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";

function Favorites() {
  const [myFavorites, setMyFavorites] = useState([]);

  const getFavorites = () => {
    apiConnection
      .get(`/favorites`)
      .then((favorite) => setMyFavorites(favorite.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="bg-primary flex flex-col items-center gap-y-5 pt-20">
      <h1 className="my-5 text-white text-xl">All my favorites videos</h1>
      <div>{myFavorites[0].videoName}</div>
    </div>
  );
}

export default Favorites;
