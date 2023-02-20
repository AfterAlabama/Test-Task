import cl from "../Circle.module.scss";
import gsap from "gsap";
import { RefContextProps } from "../../../utils/Props";

export const MouseOverHandler = (el: any, circleRef: RefContextProps) => {
  if (el !== circleRef.current && !el.classList.contains(cl.active)) {
    //creating a digit in the circle
    const circleDot = document.getElementById(el.id)!;
    const content = document.createTextNode(el.id);
    circleDot.appendChild(content);

    //magnifying the circle
    gsap.to(el, {
      duration: 0.4,
      width: 60,
      height: 60,
      backgroundColor: "white",
      opacity: 1,
      border: "2px solid rgba(0,0,0,0.2)",
    });
  }
};
