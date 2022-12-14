import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [displaySlider, setDisplaySlider] = useState(false);

  const handleDisplaymenu = () => {
    setDisplaySlider(!displaySlider);
  };

  return (
    <div className="bg-primary">
      <div className="flex flex-col h-screen px-6 py-5 border-b justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5">
            <Link
              to="Setting"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
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
              <div className="block pl-5">
                {displaySlider && (
                  <>
                    <Link
                      to="Slider_1"
                      className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                    >
                      <p className="text-base leading-4">Sliders 1</p>
                    </Link>
                    <Link
                      to="Slider_2"
                      className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                    >
                      <p className="text-base leading-4">Sliders 2</p>
                    </Link>
                    <Link
                      to="Slider_3"
                      className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                    >
                      <p className="text-base leading-4">Sliders 3</p>
                    </Link>
                    <Link
                      to="Grille"
                      className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
                    >
                      <p className="text-base leading-4">Grille</p>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Link
              to="Video"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
            >
              <p className="text-base leading-4">Videos</p>
            </Link>
            <Link
              to="Category"
              className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2 w-full"
            >
              <p className="text-base leading-4">Categories</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="flex hover:text-secondary focus:text-secondary text-white px-3 py-2  w-full"
          >
            <p className="text-base leading-4">Deconnexion</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
