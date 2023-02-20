import gsap from "gsap";
import { createContext, useRef, useState } from "react";
import { RefContextProps } from "../../utils/Props";
import Caption from "../CaptionComponent/Caption";
import ChangingInterface from "../ChangingInterface/ChangingInterface";
import Circle from "../CircleComponent/Circle";
import Pages from "../PagesComponent/Pages";
import SelectorArrows from "../SelectorArrowsComponent/SelectorArrows";
import SelectorDots from "../SelectorDotsComponent/SelectorDots";
import MainYears from "../YearsComponent/MainYears";
import cl from "./HistoryDatesApp.module.scss";

export const RefContext = createContext<RefContextProps[]>([]);

const HistoryDatesApp = () => {
  const [firstYear, setFirstYear] = useState(1980);
  const [secondYear, setSecondYear] = useState(1986);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 6;

  const changingInterfaceRef = useRef<HTMLDivElement>(null!);

  const circleRef = useRef<HTMLDivElement>(null!);

  const captionRef = useRef<HTMLDivElement>(null!);

  const leftArrowClickHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);

      const year = {
        first: firstYear,
        second: secondYear,
      };

      if (window.innerWidth > 501) {
        gsap.to(year, {
          duration: 0.7,
          ease: "none",
          first: firstYear - 7,
          second: secondYear - 7,
          onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          },
        });
      } else {
        gsap.to(year, {
          duration: 0.5,
          ease: "none",
          first: firstYear - 7,
          second: secondYear - 7,
          onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          },
        });
      }

      gsap.to(circleRef.current, {
        duration: 1,
        rotation: "-=60",
      });

      const tl2 = gsap.timeline();

      gsap.to(captionRef.current, {
        duration: 1,
        x: -180,
        y: 20,
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

      // temp to make circles not rotate
      for (let i = 1; i < 7; i++) {
        const circleDot = document.getElementById(`${i}`)!;
        gsap.to(circleDot, {
          duration: 1,
          rotation: "+=60",
        });
      }

      const tl = gsap.timeline();

      if (window.innerWidth > 501) {
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
      } else {
        gsap.from(changingInterfaceRef.current, {
          duration: 0.7,
          opacity: 0,
          y: 10,
          stagger: 0.2,
          ease: "power1.inOut",
        });
      }
    }
  };

  const rightArrowClickHandler = () => {
    if (currentPage !== 6) {
      setCurrentPage(currentPage + 1);

      const year = {
        first: firstYear,
        second: secondYear,
      };

      if (window.innerWidth > 501) {
        gsap.to(year, {
          duration: 0.7,
          ease: "none",
          first: firstYear + 7,
          second: secondYear + 7,
          onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          },
        });
      } else {
        gsap.to(year, {
          duration: 0.5,
          ease: "none",
          first: firstYear + 7,
          second: secondYear + 7,
          onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          },
        });
      }

      gsap.to(circleRef.current, {
        duration: 1,
        rotation: "+=60",
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

      // temp to make circles not rotate
      for (let i = 1; i < 7; i++) {
        const circleDot = document.getElementById(`${i}`)!;
        gsap.to(circleDot, {
          duration: 1,
          rotation: "-=60",
        });
      }

      const tl = gsap.timeline();

      if (window.innerWidth > 501) {
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
      } else {
        gsap.from(changingInterfaceRef.current, {
          duration: 0.7,
          opacity: 0,
          y: 10,
          stagger: 0.2,
          ease: "power1.inOut",
        });
      }
    }
  };
  //for dots below
  const DotClickHandler = (curPage: number) => {
    setCurrentPage(curPage);

    const year = {
      first: firstYear,
      second: secondYear,
    };

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
    gsap.from(changingInterfaceRef.current, {
      duration: 0.7,
      opacity: 0,
      y: 10,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  };

  const DesktopCaption = window.innerWidth > 501 && (
    <Caption 
      number={currentPage} 
      ref={captionRef} 
    />
  );

  return (
    <RefContext.Provider value={[changingInterfaceRef, circleRef, captionRef]}>
      <div className={cl.mainContainer}>
        <Circle
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstYear={firstYear}
          secondYear={secondYear}
          setFirstYear={setFirstYear}
          setSecondYear={setSecondYear}
          ref={circleRef}
        />
        <div className={cl.spacer2} />
        <div className={cl.spacer3} />
        <div className={cl.secondaryContainer}>
          <h1 className={cl.title}>Исторические даты</h1>
          {DesktopCaption}
          <MainYears 
            firstYear={firstYear} 
            secondYear={secondYear} 
          />
          <Pages 
            currentPage={currentPage} pageLimit={pageLimit} 
          />
          <div className={cl.flex}>
            <SelectorArrows
              currentPage={currentPage}
              pageLimit={pageLimit}
              leftArrowClickHandler={leftArrowClickHandler}
              rightArrowClickHandler={rightArrowClickHandler}
            />
          </div>
          <div ref={changingInterfaceRef}>
            <ChangingInterface 
              currentPage={currentPage} 
            />
          </div>
          <SelectorDots
            currentPage={currentPage}
            DotClickHandler={DotClickHandler}
          />
        </div>
      </div>
    </RefContext.Provider>
  );
};

export default HistoryDatesApp;
