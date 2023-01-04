/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ButtonTemplate from "./ButtonTemplate";

function Header() {
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
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
          alt="slide 1"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">Lorem ipsum dolor sit amet.</h1>
            <ButtonTemplate
              buttonType="button"
              buttonText="SUBSCRIBE"
              buttonStyle="cstm_buttonSecondary"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
          alt="slide 2"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">Lorem ipsum dolor sit amet.</h1>
            <ButtonTemplate
              buttonType="button"
              buttonText="SUBSCRIBE"
              buttonStyle="cstm_buttonSecondary"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
          alt="slide 3"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">Lorem ipsum dolor sit amet.</h1>
            <ButtonTemplate
              buttonType="button"
              buttonText="SUBSCRIBE"
              buttonStyle="cstm_buttonSecondary"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
