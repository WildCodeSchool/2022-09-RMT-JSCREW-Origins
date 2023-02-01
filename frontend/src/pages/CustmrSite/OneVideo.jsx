import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiLock2Fill } from "react-icons/ri";

import apiConnection from "@services/apiConnection";
import TemplateCstmrSlider1 from "@components/TemplateCstmrSlider1";
import ButtonTemplate from "../../components/ButtonTemplate";
import User from "../../contexts/UserContext";

function OneVideo() {
  const { user } = useContext(User.UserContext);
  const [video, setVideo] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const checkIfFavorite = () => {
    if (user && video) {
      apiConnection
        .get(`/favorites/${video.id}`)
        .then((favorite) => {
          if (favorite.data[0] && favorite.data[0].id_video === video.id) {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const getOneVideo = () => {
    apiConnection
      .get(`/videos/${id}`)
      .then((oneVideo) => {
        setVideo(oneVideo.data);
      })
      .catch((err) => console.error(err));
  };

  const handleFavorite = (idVideo) => {
    if (!isFavorite) {
      apiConnection
        .post(`/favorites/${idVideo}`)
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => console.error(err));
    } else {
      apiConnection
        .delete(`/favorites/${idVideo}`)
        .then(() => {
          setIsFavorite(false);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, [video]);

  useEffect(() => {
    getOneVideo();
  }, [id]);

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
      <div className="pt-5 bg-primary">
        <div className="pt-20 text-white h-full">
          {video && (
            <>
              <div className="flex flex-col md:flex md:flex-row md:pt-10">
                {(user || video.Premium === 0) && (
                  <iframe
                    className="md:w-3/5 h-80 md:h-auto md:pl-10"
                    title={video.Name}
                    src={video.Url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {!user && video.Premium === 1 && (
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
                {/* Boutons de partage v mobile */}
                <div className="flex items-center gap-3 my-3 pl-5 md:hidden">
                  {/* Bouton favoris */}
                  {user && (
                    <button
                      onClick={() => handleFavorite(video.id)}
                      type="button"
                    >
                      {!isFavorite && (
                        <svg
                          width={25}
                          height={25}
                          fill="#f0f0f0"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21ZM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6Z" />
                        </svg>
                      )}
                      {isFavorite && (
                        <svg
                          width={25}
                          height={25}
                          fill="#ff680a"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21Z" />
                        </svg>
                      )}
                    </button>
                  )}
                  {/* Boutons de partage */}
                  <div className="flex gap-3 items-center">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${
                        import.meta.env.VITE_FRONTEND_URL
                      }Videos/${id}`}
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
                      href={`https://twitter.com/intent/tweet?url=${
                        import.meta.env.VITE_FRONTEND_URL
                      }Videos/${id}&text=`}
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                        import.meta.env.VITE_FRONTEND_URL
                      }Videos/${id}`}
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
                {/* Infos de la vidéo (titre, description, etc.) */}
                <div className="px-5 md:px-10 md:pb-10 md:pt-0 md:w-2/5">
                  <h1 className="md:text-3xl text-2xl md:mb-5">{video.Name}</h1>
                  <h2 className="text-xl md:text-2xl md:mb-5">
                    {video.Category}
                  </h2>
                  <p className="text-md overflow-y-auto md:h-36 lg:h-60">
                    {video.Description}
                  </p>
                </div>
              </div>
              {/* Boutons de partage v desktop */}
              <div className="hidden md:flex items-center gap-3 my-5 pl-10">
                {/* Bouton favoris */}
                {user && (
                  <button
                    onClick={() => handleFavorite(video.id)}
                    type="button"
                  >
                    {!isFavorite && (
                      <svg
                        width={25}
                        height={25}
                        fill="#f0f0f0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21ZM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6Z" />
                      </svg>
                    )}
                    {isFavorite && (
                      <svg
                        width={25}
                        height={25}
                        fill="#ff680a"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21Z" />
                      </svg>
                    )}
                  </button>
                )}
                {/* Boutons de partage */}
                <div className="flex gap-3 items-center">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${
                      import.meta.env.VITE_FRONTEND_URL
                    }Videos/${id}`}
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
                    href={`https://twitter.com/intent/tweet?url=${
                      import.meta.env.VITE_FRONTEND_URL
                    }Videos/${id}&text=`}
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
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                      import.meta.env.VITE_FRONTEND_URL
                    }Videos/${id}`}
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
            </>
          )}
          {video && (
            <div className="mt-3 md:mt-10">
              <TemplateCstmrSlider1
                url={`/slidersCategory/${video?.id_Category}`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OneVideo;
