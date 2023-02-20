import gsap from "gsap";
import { CircleClickHandlerProps } from "../../../utils/Props";

export const CircleClickHandler: CircleClickHandlerProps = (
  el,
  currentPage,
  setCurrentPage,
  firstYear,
  secondYear,
  setFirstYear,
  setSecondYear,
  changingInterfaceRef,
  circleRef,
  captionRef
) => {
  if (el !== circleRef.current && currentPage != el.id) {
    const curPage = Number(el.id);
    setCurrentPage(curPage);

    // temp solution to make circles not rotate (fix later!)
    for (let i = 1; i < 7; i++) {
      const circleDot = document.getElementById(`${i}`)!;
      gsap.to(circleDot, {
        duration: 1,
        rotation: "-=60",
      });
    }

    const year = {
      first: firstYear,
      second: secondYear,
    };

    gsap.to(circleRef.current, {
      duration: 1,
      rotation: "+=60deg",
    });

    const tl2 = gsap.timeline();

    gsap.to(captionRef.current, {
      duration: 1,
      x: 20,
      y: 180,
      scale: 0,
    });

    tl2.to(captionRef.current, {
      duration: 1,
      opacity: 0,
    });

    tl2.to(captionRef.current, {
      duration: 0.3,
      opacity: 0.7,
      scale: 1,
      x: 0,
      y: 0,
    });

    gsap.to(year, {
      duration: 0.5,
      ease: "none",
      first: firstYear + 7 * (curPage - currentPage),
      second: secondYear + 7 * (curPage - currentPage),
      onUpdate: () => {
        setFirstYear(Math.trunc(year.first));
        setSecondYear(Math.trunc(year.second));
      },
    });

    if (curPage < currentPage) {
      gsap.to(year, {
        duration: 0.5,
        ease: "none",
        first: firstYear - 7 * (currentPage - curPage),
        second: secondYear - 7 * (currentPage - curPage),
        onUpdate: () => {
          setFirstYear(Math.trunc(year.first));
          setSecondYear(Math.trunc(year.second));
        },
      });
    }

    const tl = gsap.timeline();

    tl.to(changingInterfaceRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 0,
      stagger: 0.2,
    });

    tl.to(changingInterfaceRef.current, {
      duration: 0.3,
      opacity: 1,
      y: -4,
      delay: 0.5,
      ease: "power1.inOut",
    });
  }
};
