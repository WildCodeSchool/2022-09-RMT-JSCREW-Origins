import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col h-screen px-6 py-5 border-b justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-5">
            <Link
              to="Setting"
              className="flex justify-start items-center space-x-6 hover:text-secondary focus:text-secondary text-white rounded px-3 py-2  w-full"
            >
              <p className="text-base leading-4 ">Settings</p>
            </Link>
            <Link
              to="Slider"
              className="flex justify-start items-center space-x-6 hover:text-secondary focus:text-secondary text-white rounded px-3 py-2  w-full"
            >
              <p className="text-base leading-4 ">Sliders</p>
            </Link>
            <Link
              to="Video"
              className="flex place-self-end space-x-6 hover:text-secondary focus:text-secondary text-white rounded px-3 py-2 w-full"
            >
              <p className="text-base leading-4 ">Videos</p>
            </Link>
            <Link
              to="Category"
              className="flex justify-start items-center space-x-6 hover:text-secondary focus:text-secondary text-white rounded px-3 py-2  w-full"
            >
              <p className="text-base leading-4 ">Categories</p>
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link
            to="/"
            className="flex justify-start items-center space-x-6 hover:text-secondary focus:text-secondary text-white rounded px-3 py-2  w-full"
          >
            <p className="text-base leading-4  ">Deconnexion</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
