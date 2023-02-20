import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Block from "../BlockComponent/Block";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperProps } from "../../utils/Props";
import cl from "./Swiper.module.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const SwiperDates: FC<SwiperProps> = ({ number }) => {
  const swiperNavPrevRef = useRef<HTMLDivElement>(null!);
  const swiperNavNextRef = useRef<HTMLDivElement>(null!);

  return (
    <Swiper
      modules={[Navigation]}
      className={cl.swiper}
      spaceBetween={50}
      slidesPerView={window.innerWidth > 500 ? 4 : 2}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      onInit={(swiper) => {
        swiper.params.navigation!.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation!.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide className={cl.firstSwiperBlock}>
        <Block firstYear={number} />
      </SwiperSlide>
      <SwiperSlide>
        <Block firstYear={number + 2} />
      </SwiperSlide>
      <SwiperSlide>
        <Block firstYear={number + 4} />
      </SwiperSlide>
      <SwiperSlide>
        <Block firstYear={number + 5} />
      </SwiperSlide>
      <SwiperSlide>
        <Block firstYear={number + 6} />
      </SwiperSlide>
      <div 
        className={cl.swiperButtonPrev} 
        ref={swiperNavPrevRef}
      >
        <MdArrowBackIos 
          style={{ background: "none" }} 
        />
      </div>
      <div 
        className={cl.swiperButtonNext} 
        ref={swiperNavNextRef}
      >
        <MdArrowForwardIos 
          style={{ background: "none" }} 
        />
      </div>
    </Swiper>
  );
};

export default SwiperDates;
