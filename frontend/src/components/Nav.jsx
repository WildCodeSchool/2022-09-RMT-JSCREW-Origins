import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineImportantDevices } from "react-icons/md";
import { AiOutlineImport, AiOutlineSetting } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCategory, BiHomeAlt } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
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
              <BiHomeAlt
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Home</p>
            </Link>
            <Link
              to="Settings"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Settings")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <AiOutlineSetting
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Settings</p>
            </Link>
            <div className="flex flex-col">
              <button
                className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                type="button"
                onClick={handleDisplaymenu}
              >
                <TfiLayoutSliderAlt
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                />
                <p className="text-base leading-4 ml-3">Sliders</p>
              </button>
              <div className="block pl-2">
                {displaySlider && (
                  <>
                    <Link
                      to="Slider/1"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_1")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4 ml-3">1: By videos</p>
                    </Link>
                    <Link
                      to="Slider/2"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_2")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">2: By videos</p>
                    </Link>
                    <Link
                      to="Slider/3"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_3")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">3: By videos</p>
                    </Link>
                    <Link
                      to="Slider/4"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/Slider_4")
                          ? "text-secondary"
                          : "hover:text-secondary focus:text-secondary"
                      } text-white px-3 py-2 w-full`}
                    >
                      <p className="text-base leading-4">4: By videos</p>
                    </Link>
                    <Link
                      to="SliderByCat"
                      className={`flex ${
                        location.pathname.endsWith("Dashboard/SliderByCat")
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
              <BsCameraVideo
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Videos</p>
            </Link>
            <Link
              to="Categories"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Categories")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <BiCategory
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Categories</p>
            </Link>
            <Link
              to="Users"
              className={`flex ${
                location.pathname.endsWith("Dashboard/Users")
                  ? "text-secondary"
                  : "hover:text-secondary focus:text-secondary"
              } text-white px-3 py-2 w-full`}
            >
              <FiUsers
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Users</p>
            </Link>
            <Link
              to="/"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
            >
              <MdOutlineImportantDevices
                style={{
                  color: "#fff",
                  fontSize: "20px",
                }}
              />
              <p className="text-base leading-4 ml-3">Website</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
            onClick={handleLogOut}
          >
            <AiOutlineImport
              style={{
                color: "#fff",
                fontSize: "20px",
              }}
            />
            <p className="text-base leading-4 ml-3">Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
