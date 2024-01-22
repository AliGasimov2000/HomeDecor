import React from "react";
import "./SwiperButton.css";
import { useSwiper } from "swiper/react";
import { FaArrowAltCircleRight, FaArrowCircleLeft} from "react-icons/fa";

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="Swiper__btn">
      <button onClick={() => swiper.slidePrev()}>
       <FaArrowCircleLeft/>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default SwiperButton;
