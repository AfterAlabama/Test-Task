import cl from "./SelectorArrows.module.scss";
import { FC } from "react";
import { ArrowsProps } from "../../utils/Props";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const SelectorArrows: FC<ArrowsProps> = ({
  currentPage,
  pageLimit,
  leftArrowClickHandler,
  rightArrowClickHandler,
}) => {
  const leftArrowClass = currentPage === 1 ? cl.grayed : "";
  const rightArrowClass = currentPage === pageLimit ? cl.grayed : "";

  return (
    <div className={cl.arrows}>
      <div 
        className={leftArrowClass} 
        onClick={leftArrowClickHandler}
      >
        {<MdArrowBackIos 
            style={{ background: "none" }} 
          />}
      </div>
      <div 
        className={rightArrowClass} 
        onClick={rightArrowClickHandler}
      >
        {<MdArrowForwardIos 
          style={{ background: "none" }} 
        />}
      </div>
    </div>
  );
};

export default SelectorArrows;
