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
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 place-items-center mb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myFavorites.map((myFavorite) => (
          <iframe
            className="w-11/12"
            title={myFavorite.Name}
            src={myFavorite.Url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
