import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Block from '../BlockComponent/Block';
import 'swiper/css';
import { BlockProps } from '../../utils/Props';
import cl from './Swiper.module.scss';

const SwiperDates: FC<BlockProps> = ({ firstYear }) => {
  return (
    <Swiper
      className={cl.swiper}
      spaceBetween={50}
      slidesPerView={2}
    >
      <SwiperSlide>
        <Block
          firstYear={firstYear}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={firstYear + 2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={firstYear + 4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={firstYear + 5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={firstYear + 6}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDates;
