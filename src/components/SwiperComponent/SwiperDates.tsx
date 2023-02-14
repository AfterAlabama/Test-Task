import { FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Block from '../BlockComponent/Block';
import 'swiper/css';
import { SwiperProps } from '../../utils/Props';
import cl from './Swiper.module.scss';

const SwiperDates: FC<SwiperProps> = ({number}) => {
 
  return (
    <Swiper
      className={cl.swiper}
      spaceBetween={50}
      slidesPerView={2}
    >
      <SwiperSlide>
        <Block
          firstYear={number}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={number + 2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={number + 4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={number + 5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Block
          firstYear={number + 6}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDates;
