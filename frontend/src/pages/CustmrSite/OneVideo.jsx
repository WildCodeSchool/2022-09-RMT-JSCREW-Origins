import React, { useState, useEffect, useParams } from "react";
import { Helmet } from "react-helmet";

import apiConnection from "@services/apiConnection";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

function OneVideo() {
  const [video, setVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiConnection
      .get(`/videos/${id}`)
      .then((oneVideo) => {
        setVideo(oneVideo.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={video?.Name} />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_FRONTEND_URL}/videos/8`}
        />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_FRONTEND_URL}/assets/logo.png`}
        />
        <meta
          property="og:description"
          content={video?.Description.slice(0, 55).replace(/\s/g, " ")}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${import.meta.env.VITE_FRONTEND_URL}/assets/logo.png`}
        />
        <title>{video?.Name}</title>
        <meta name="description" content={video?.Description} />
        <link
          rel="icon"
          type="image/png"
          href={`${import.meta.env.VITE_FRONTEND_URL}/assets/logo.png`}
        />
      </Helmet>
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
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=http%3A//${
                      import.meta.env.VITE_FRONTEND_URL
                    }/videos/8`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#1b74e4",
                      fontSize: "20px",
                    }}
                  >
                    <ImFacebook2 />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=https%3A//${
                      import.meta.env.VITE_FRONTEND_URL
                    }/videos/8`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "rgb(54 155 240)",
                      fontSize: "23px",
                    }}
                  >
                    <FaTwitterSquare />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//${
                      import.meta.env.VITE_FRONTEND_URL
                    }/videos/8`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#2366c2",
                      fontSize: "20px",
                    }}
                  >
                    <SiLinkedin />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OneVideo;
