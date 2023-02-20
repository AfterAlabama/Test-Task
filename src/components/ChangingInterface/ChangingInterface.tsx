import { FC } from "react";
import { ChangingInterfaceProps } from "../../utils/Props";
import Caption from "../CaptionComponent/Caption";
import Interface from "./Interface";

const ChangingInterface: FC<ChangingInterfaceProps> = ({ currentPage }) => {
  const numberCondition =
    currentPage === 1 ? 1980 : 1980 + 7 * (currentPage - 1);

  const MobileCaption = window.innerWidth < 501 && (
    <Caption number={currentPage} />
  );

  return (
    <>
      {MobileCaption}
      <Interface number={numberCondition} />
    </>
  );
};

export default ChangingInterface;
