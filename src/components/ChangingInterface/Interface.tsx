import { FC } from "react";
import { Interfaceprops } from "../../utils/Props";
import Caption from "../CaptionComponent/Caption";
import SwiperDates from "../SwiperComponent/SwiperDates";
import cl from './Interface.module.scss'


const Interface: FC<Interfaceprops> = ({number}) => {
  return (
    <div>
      <Caption
        number = {number}
      />
      <hr
        className={cl.spacer}
      />
      <SwiperDates
        number = {number}
      />
    </div>
  )
}

export default Interface
