import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import apiConnection from "@services/apiConnection";
import User from "../../contexts/UserContext";

function Favorites() {
  const [myFavorites, setMyFavorites] = useState([]);
  const { user } = useContext(User.UserContext);
  const genericLine = `h-1 w-3 my-1 rounded-full bg-white transition`;

  const notify = (msg) => {
    toast(msg);
  };

  const getFavorites = () => {
    apiConnection
      .get(`/favorites`)
      .then((favorite) => setMyFavorites(favorite.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleRemoveFavorite = (id) => {
    apiConnection
      .delete(`/favorites/${id}`)
      .then(() => {
        getFavorites();
        notify("Video removed from your favorites");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Origin's - Favorites</title>
        <meta
          name="description"
          content="View and manage your favorite e-sports videos on this page. Keep track of your favorite matches and players, and easily access your favorite content on Origin's."
        />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {user && (
        <div className="bg-primary flex flex-col items-center gap-y-5 pt-20">
          <h1 className="my-5 text-white text-3xl text-xl">
            All my favorites videos
          </h1>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 place-items-center mb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {myFavorites.map((myFavorite) => (
              <div className="relative">
                <Link to={`/Videos/${myFavorite.id_video}`}>
                  <img
                    className="w-full h-2/4 align-baseline"
                    title={myFavorite.Name}
                    src={`${import.meta.env.VITE_BACKEND_URL}/${
                      myFavorite.Screenshot
                    }`}
                    alt={myFavorite.Name}
                  />
                </Link>
                <button
                  type="button"
                  className="bg-red-700 absolute rounded-full p-1 w-6 h-6 -top-3 right-4 border-2"
                  onClick={() => handleRemoveFavorite(myFavorite.id_video)}
                >
                  <div
                    className={`${genericLine} rotate-45 translate-y-0 opacity-95`}
                  />
                  <div
                    className={`${genericLine} -rotate-45 -translate-y-2 opacity-95`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Favorites;
