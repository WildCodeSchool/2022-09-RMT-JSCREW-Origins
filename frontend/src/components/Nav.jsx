import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="flexw-1/3 h-screen bg-gray-900 flex-col">
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <div>
            <Link to="Setting">
              <button
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                type="button"
              >
                <p className="text-base leading-4  ">Setting</p>
              </button>
            </Link>
            <Link to="Slider">
              <button
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                type="button"
              >
                <p className="text-base leading-4  ">Slider</p>
              </button>
            </Link>
            <Link to="Video">
              <button
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                type="button"
              >
                <p className="text-base leading-4  ">Video</p>
              </button>
            </Link>
            <Link to="Category">
              <button
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                type="button"
              >
                <p className="text-base leading-4  ">Category</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
