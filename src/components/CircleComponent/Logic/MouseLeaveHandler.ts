import cl from "../Circle.module.scss";
import gsap from "gsap";
import { RefContextProps } from "../../../utils/Props";

export const MouseLeaveHandler = (el: any, circleRef: RefContextProps) => {
  if (el !== circleRef.current && !el.classList.contains(cl.active)) {
    //removing a digit in the circle
    const circleDot = document.getElementById(el.id)!;
    circleDot.replaceChildren(document.createTextNode(""));

    //undoing the magnifying of the circle
    gsap.fromTo(
      el,
      {
        duration: 0.4,
        width: 60,
        height: 60,
        backgroundColor: "white",
        opacity: 1,
        border: "3px solid rgba(0,0,0,0.2)",
      },
      {
        duration: 0.4,
        width: 8,
        height: 8,
        backgroundColor: "black",
        opacity: 0.6,
        border: "none",
      }
    );
  }
};
