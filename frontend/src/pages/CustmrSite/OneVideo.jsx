import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiLock2Fill } from "react-icons/ri";

import apiConnection from "@services/apiConnection";
import ButtonTemplate from "../../components/ButtonTemplate";
import User from "../../contexts/UserContext";

function OneVideo() {
  const { user } = useContext(User.UserContext);
  const [video, setVideo] = useState();
  const navigate = useNavigate();
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
            <div className="md:flex md:pl-10 h-full">
              {user && (
                <iframe
                  className="w-full h-2/4 md:w-3/5 md:h-4/6 md:pl-10"
                  title={video.Name}
                  src={video.Url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              {!user && (
                <div className="md:w-3/5 md:h-4/6  flex flex-col items-center justifier-center text-center mt-5 bg-[#00162B] rounded-3xl mx-5">
                  <RiLock2Fill className="text-7xl md:text-9xl mt-5 md:mt-20" />
                  <p className="text-1xl mt-3 md:text-4xl md:mt-10">
                    This video is only available in premium
                  </p>
                  <ButtonTemplate
                    buttonType="button"
                    buttonText="SUBSCRIBE"
                    buttonStyle="cstm_buttonSecondary mt-4 md:mt-10 mb-6"
                    methodOnClick={() => navigate("/Login")}
                  />
                </div>
              )}
              <div className="p-10 md:w-2/5">
                <h1 className="md:text-6xl text-2xl md:mb-5">{video.Name}</h1>
                <h2 className="text-xl md:text-5xl md:mb-5">
                  {video.Category}
                </h2>
                <p className="md:text-3xl">{video.Description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=http%3A//${
                      import.meta.env.VITE_FRONTEND_URL
                    }/videos/${id}`}
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
