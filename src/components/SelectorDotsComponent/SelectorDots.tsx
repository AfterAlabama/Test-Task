import { FC } from "react";
import { DotsProps } from "../../utils/Props";
import Dot from "./Dot";
import cl from "./SelectorDots.module.scss";

const SelectorDots: FC<DotsProps> = ({ currentPage, DotClickHandler }) => {
  const SelectorDots: number[] = [];
  for (let i = 1; i < 7; i++) {
    SelectorDots.push(i);
  }

  const isChosenCondition = (el: number) => {
    return currentPage === SelectorDots[el - 1] ? true : false;
  };

  return (
    <div className={cl.DotContainer}>
      {SelectorDots.map((SelectorDot, index) => (
        <Dot
          key={index + 1}
          currentPage={SelectorDots[SelectorDot]}
          DotClickHandler={() => DotClickHandler(SelectorDots[SelectorDot - 1])}
          isChosen={isChosenCondition(SelectorDot)}
        />
      ))}
    </div>
  );
};

export default SelectorDots;
