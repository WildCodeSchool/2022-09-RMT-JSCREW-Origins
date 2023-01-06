import axios from "axios";
import React, { useState, useEffect } from "react";

function OneVideo() {
  const [video, setVideo] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/8`)
      .then((oneVideo) => {
        setVideo(oneVideo.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen bg-primary">
      <div className="pt-20 text-white h-full">
        {video && (
          <div className="md:flex h-full">
            <iframe
              className="w-full h-2/4 md:w-3/5 md:h-4/6 md:pl-10"
              title={video.Name}
              src={video.Url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="p-10">
              <h1 className="text-3xl md:mb-5">{video.Name}</h1>
              <h2 className="text-xl md:mb-5">{video.Category}</h2>
              <p>{video.Description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneVideo;
