import { FC } from "react";
import { RxDotFilled } from "react-icons/rx";
import { DotProps } from "../../utils/Props";
import cl from "./SelectorDots.module.scss";

const Dot: FC<DotProps> = ({ isChosen, currentPage, DotClickHandler }) => {
  const DotClass = [cl.dot, isChosen ? cl.chosen : ""].join(" ");

  return (
    <RxDotFilled
      className={DotClass}
      onClick={() => DotClickHandler(currentPage)}
    />
  );
};

export default Dot;
