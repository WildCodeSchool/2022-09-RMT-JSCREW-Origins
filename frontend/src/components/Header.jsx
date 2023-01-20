/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ButtonTemplate from "./ButtonTemplate";
import User from "../../src/contexts/UserContext";

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
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://i.ytimg.com/vi/SZxvqmyb-d4/maxresdefault.jpg"
          alt="slide 1"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
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
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://www.koobit.com/website/media/rocket-league-world-championship-29761"
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
          className="object-fill w-full"
          style={{ maxHeight: "620px" }}
          src="https://www.betus.com.pa/wp-content/uploads/2023/01/5-teams-to-watch-in-2023-cs-go-part-1-01-02-2022.webp"
          alt="slide 3"
        />
        <div className="flex justify-center absolute transform -translate-y-1/2 -translate-x-1/2 left-2/4 top-2/4">
          <div className="text-center text-4xl text-white">
            <h1 className="mb-5">World Championship C S - G O 2022</h1>
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
