import { forwardRef } from "react";
import { CaptionProps } from "../../utils/Props";
import cl from "./Caption.module.scss";

const Caption = forwardRef<HTMLDivElement, CaptionProps>(({ number }, ref) => {
  const captionCondition = [
    "Технологии",
    "Кино",
    "Литература",
    "Театр",
    "Спорт",
    "Наука",
  ];

  return (
    <h3 
      className={cl.caption} 
      ref={ref}
    >
      {captionCondition[number - 1]}
    </h3>
  );
});

export default Caption;
