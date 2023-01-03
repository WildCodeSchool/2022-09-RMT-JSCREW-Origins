import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function OneVideo() {
  const [video, setVideo] = useState();
  // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos/1`)
      .then((oneVideo) => {
        setVideo(oneVideo.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen bg-primary">
      <div className="pt-20 text-white">
        {video && (
          <div className="">
            <iframe
              className="w-full"
              title={video.Name}
              height="315"
              src={video.Url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="text-xl">{video.Name}</div>
            <div className="text-lg">{video.Category}</div>
            <div>{video.Description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneVideo;
