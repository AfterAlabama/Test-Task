import { forwardRef, useContext, useEffect } from "react";
import { Circleprops } from "../../utils/Props";
import { RefContext } from "../HistoryDatesApp/HistoryDatesApp";
import cl from "./Circle.module.scss";
import { CircleClickHandler } from "./Logic/CircleClickHandler";
import { MouseLeaveHandler } from "./Logic/MouseLeaveHandler";
import { MouseOverHandler } from "./Logic/MouseOverHandler";
import { SetCurrentCircle } from "./Logic/SetCurrentCircle";

const Circle = forwardRef<HTMLDivElement, Circleprops>(
  (
    {
      currentPage,
      setCurrentPage,
      firstYear,
      secondYear,
      setSecondYear,
      setFirstYear,
    },
    ref
  ) => {
    const [changingInterfaceRef, circleRef, captionRef] =
      useContext(RefContext);

    //responsible for the current circleDot
    useEffect(() => {
      SetCurrentCircle(currentPage);
    }, [currentPage]);

    return (
      <div
        ref={ref}
        className={cl.circle}
        onMouseOver={(el) => MouseOverHandler(el.target, circleRef)}
        onMouseOut={(el) => MouseLeaveHandler(el.target, circleRef)}
        onClick={(el) =>
          CircleClickHandler(
            el.target,
            currentPage,
            setCurrentPage,
            firstYear,
            secondYear,
            setFirstYear,
            setSecondYear,
            changingInterfaceRef,
            circleRef,
            captionRef
          )
        }
      >
        <div className={cl.circleDot1} id="1"></div>
        <div className={cl.circleDot2} id="2"></div>
        <div className={cl.circleDot3} id="3"></div>
        <div className={cl.circleDot4} id="4"></div>
        <div className={cl.circleDot5} id="5"></div>
        <div className={cl.circleDot6} id="6"></div>
      </div>
    );
  }
);

export default Circle;
