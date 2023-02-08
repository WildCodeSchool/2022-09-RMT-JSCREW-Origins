import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import apiConnection from "@services/apiConnection";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { RiLock2Fill } from "react-icons/ri";

import User from "../contexts/UserContext";

function TemplateCstmrSlider1({ url, idTitle }) {
  const { user } = useContext(User.UserContext);
  const [sliders, setSliders] = useState([]);
  const [title, setTitle] = useState();

  const getSlider = () => {
    apiConnection
      .get(url)
      .then((slider) => setSliders(slider.data))
      .catch((error) => console.error(error));
  };
  const getTitle = () => {
    apiConnection
      .get(`/sliderTitle/${idTitle}`)
      .then((videos) => setTitle(videos.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSlider();
    getTitle();
  }, []);
  return (
    <div className="w-full">
      {sliders[0] && (
        <div className="w-full">
          <div className="flex flex-col items-start gap-1 w-full h-full py-6 sm:py-6 px-2">
            <h1 className="text-white mb-2 ml-3 text-2xl">
              {sliders[0]?.category ? sliders[0].category : title?.slider_title}
            </h1>
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight
              totalSlides={sliders.length}
              visibleSlides={sliders.length < 4 ? 2 : 4}
              step={1}
              infinite
            >
              <div className="flex w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 bg-primary/75 p-3 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      {sliders.map((slider) => (
                        <Slide key={slider.id_video}>
                          <Link to={`/Videos/${slider.id_video}`}>
                            <div className="flex flex-shrink-0 relative sm:w-auto ">
                              <img
                                className="w-full h-2/4 align-baseline"
                                title={slider.Name}
                                src={`${import.meta.env.VITE_BACKEND_URL}/${
                                  slider.Screenshot
                                }`}
                                alt={slider.Name}
                              />
                              {!user && slider.Premium === 1 && (
                                <div className="absolute bottom-0 right-0">
                                  <RiLock2Fill className="text-4xl text-white text-secondary" />
                                </div>
                              )}
                              <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                <div className="flex h-full items-end ">
                                  <h3 className="bg-gray-800 bg-opacity-80 font-semibold leading-5 lg:leading-6 text-white">
                                    {slider.Name}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      ))}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 bg-primary/75 p-3 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider
              className="lg:hidden sm:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight
              totalSlides={sliders.length}
              visibleSlides={2}
              step={1}
              infinite
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 bg-primary/75 p-3 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      {sliders.map((slider) => (
                        <Slide key={slider.id_video}>
                          <Link to={`/Videos/${slider.id_video}`}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                              <img
                                className="object-cover object-center w-full"
                                title={slider.Name}
                                src={`${import.meta.env.VITE_BACKEND_URL}/${
                                  slider.Screenshot
                                }`}
                                alt={slider.Name}
                              />
                              {!user && slider.Premium === 1 && (
                                <div className="absolute bottom-0 right-0">
                                  <RiLock2Fill className="text-4xl text-white text-secondary" />
                                </div>
                              )}
                              <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                <div className="flex h-full items-end pb-6">
                                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                    {slider.Name}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      ))}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 bg-primary/75 p-3 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider
              className="block sm:hidden "
              naturalSlideWidth={100}
              isIntrinsicHeight
              totalSlides={sliders.length}
              visibleSlides={1}
              step={1}
              infinite
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 bg-primary/75 p-3 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                    >
                      {sliders &&
                        sliders.map((slider) => (
                          <Slide key={slider.id_video}>
                            <Link to={`/Videos/${slider.id_video}`}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img
                                  className="w-full h-2/4 align-baseline"
                                  title={slider.Name}
                                  src={`${import.meta.env.VITE_BACKEND_URL}/${
                                    slider.Screenshot
                                  }`}
                                  alt={slider.Name}
                                />
                                {!user && slider.Premium === 1 && (
                                  <div className="absolute bottom-0 right-0">
                                    <RiLock2Fill className="text-4xl text-white text-secondary" />
                                  </div>
                                )}
                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  <div className="flex h-full items-end pb-6">
                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                      {slider.Name}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </Slide>
                        ))}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 bg-primary/75 p-3 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      )}
    </div>
  );
}

export default TemplateCstmrSlider1;
