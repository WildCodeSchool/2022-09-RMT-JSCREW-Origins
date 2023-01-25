/* eslint-disable import/no-unresolved */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

import ImageOne from "@assets/Image_header/Lol_2022_Origins.jpg";
import ImageTwo from "@assets/Image_header/Rocket_league.jpg";
import ImageThree from "@assets/Image_header/Fifa.jpg";
import ButtonTemplate from "./ButtonTemplate";
import User from "../contexts/UserContext";

function Header() {
  const { user } = useContext(User.UserContext);
  const navigate = useNavigate();

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="responsivImageHeader"
          style={{ maxHeight: "620px" }}
          src={ImageOne}
          alt="slide 1"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">World Championship LOL 2022</h1>
            <div className="text-center text-4xl text-white">
              {!user && (
                <ButtonTemplate
                  buttonType="button"
                  buttonText="SUBSCRIBE"
                  buttonStyle="cstm_buttonSecondary mt-4 md:mt-10 mb-6"
                  methodOnClick={() => navigate("/Login")}
                />
              )}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="responsivImageHeader"
          style={{ maxHeight: "620px" }}
          src={ImageTwo}
          alt="slide 2"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">Rocket League World Championship</h1>
            {!user && (
              <ButtonTemplate
                buttonType="button"
                buttonText="SUBSCRIBE"
                buttonStyle="cstm_buttonSecondary mt-4 md:mt-10 mb-6"
                methodOnClick={() => navigate("/Login")}
              />
            )}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="responsivImageHeader"
          style={{ maxHeight: "620px" }}
          src={ImageThree}
          alt="slide 3"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">World Championship FIFA 2022</h1>
            {!user && (
              <ButtonTemplate
                buttonType="button"
                buttonText="SUBSCRIBE"
                buttonStyle="cstm_buttonSecondary mt-4 md:mt-10 mb-6"
                methodOnClick={() => navigate("/Login")}
              />
            )}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
