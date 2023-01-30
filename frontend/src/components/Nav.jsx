import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import User from "../contexts/UserContext";

export default function Nav() {
  const { handleUser } = useContext(User.UserContext);
  const [displaySlider, setDisplaySlider] = useState(false);
  const location = useLocation();

  const handleDisplaymenu = () => {
    setDisplaySlider(!displaySlider);
  };

  const handleLogOut = () => {
    handleUser("");
  };

  return (
    <div className="bg-primary w-2/6 md:w-1/4">
      <div className="flex flex-col h-screen px-6 py-5 border-b justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5">
            <Link
              to="HomeAdmin"
              className={`flex ${
                location.pathname.endsWith("Dashboard/HomeAdmin")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4">Home</p>
            </Link>
            <Link
              to="Settings"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Settings")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4">Settings</p>
            </Link>
            <div className="flex flex-col">
              <button
                className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                type="button"
                onClick={handleDisplaymenu}
              >
                <p className="text-base leading-4">Sliders</p>
              </button>
              <div className="block pl-2">
                {displaySlider && (
                  <>
                    <Link
                      to="Slider_1"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_1")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">1: By videos</p>
                    </Link>
                    <Link
                      to="Slider_2"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_2")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">2: By videos</p>
                    </Link>
                    <Link
                      to="Slider_3"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_3")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">By Category</p>
                    </Link>
                    <Link
                      to="Grid"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Grid")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">Grid</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Link
              to="Videos"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Videos")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4">Videos</p>
            </Link>
            <Link
              to="Categories"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Categories")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4">Categories</p>
            </Link>
            <Link
              to="Users"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Users")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <p className="text-base leading-4">Users</p>
            </Link>
            <Link
              to="/"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
            >
              <p className="text-base leading-4">⮌ Website</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
            onClick={handleLogOut}
          >
            <p className="text-base leading-4">Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
