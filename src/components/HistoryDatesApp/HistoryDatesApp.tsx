import gsap from 'gsap';
import { useState } from 'react';
import ChangingInterface from '../ChangingInterface/ChangingInterface';
import Pages from '../PagesComponent/Pages';
import SelectorArrows from '../SelectorArrowsComponent/SelectorArrows';
import SelectorDots from '../SelectorDotsComponent/SelectorDots';
import MainYears from '../YearsComponent/MainYears';
import cl from './HistoryDatesApp.module.scss'


const HistoryDatesApp = () => {
  const [firstYear, setFirstYear] = useState(1980);
  const [secondYear, setSecondYear] = useState(1986);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 6;


  const leftArrowClickHandler = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1);

      const year = {
        first: firstYear, 
        second: secondYear
      };

      const res1 = new Promise((resolve) => {
        resolve(
          gsap.to(year, {
            duration: 0.5, 
            ease: "none", 
            first: firstYear - 7, 
            second: secondYear - 7, 
            onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          }})
        )
      });

      const res2 = new Promise((resolve) => {
        resolve(
          gsap.from("#changingInterface", {
            duration: 0.7,
            opacity: 0,
            y: 10,
            stagger: 0.2,
            ease: "power1.inOut"
          })
        )
      })
      return [res1, res2]
  }
}

  const rightArrowClickHandler = () => {
    if(currentPage !== 6){
      setCurrentPage(currentPage + 1);

      const year = {
        first: firstYear, 
        second: secondYear
      };

      const res1 = new Promise((resolve) => {
        resolve(
          gsap.to(year, {
            duration: 0.5, 
            ease: "none", 
            first: firstYear + 7, 
            second: secondYear + 7, 
            onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          }})
        )
      });

      const res2 = new Promise((resolve) => {
        resolve(
          gsap.from("#changingInterface", {
            duration: 0.7,
            opacity: 0,
            y: 10,
            stagger: 0.2,
            ease: "power1.inOut"
          })
        )
      });
      return [res1, res2]
  }
};
  //for dots below
  const DotClickHandler = (curPage:number) => {
    setCurrentPage(curPage)
    
    const year = {
      first: firstYear, 
      second: secondYear
    };

    const res1 = new Promise((resolve) => {
      if(curPage > currentPage){
        resolve(
          gsap.to(year, {
            duration: 0.5, 
            ease: "none", 
            first: firstYear + 7*(curPage - currentPage), 
            second: secondYear + 7*(curPage - currentPage), 
            onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          }})
        )
      }

      if(curPage < currentPage){
        resolve(
          gsap.to(year, {
            duration: 0.5, 
            ease: "none", 
            first: firstYear - 7*(currentPage - curPage), 
            second: secondYear - 7*(currentPage - curPage), 
            onUpdate: () => {
            setFirstYear(Math.trunc(year.first));
            setSecondYear(Math.trunc(year.second));
          }})
        )
      }
    });
    const res2 = new Promise((resolve) => {
      resolve(
        gsap.from("#changingInterface", {
          duration: 0.7,
          opacity: 0,
          y: 10,
          stagger: 0.2,
          ease: "power1.inOut"
        })
      )
    });
    return [res1, res2]
  };

  return (
    <>
      <h1
        className={cl.title}
      >Исторические даты
      </h1>
      <MainYears
        firstYear={firstYear}
        secondYear = {secondYear}
      />
      <div
        id = "changingInterface"
      >
         <ChangingInterface
          currentPage = {currentPage}
         />      
      </div>
      <Pages
        currentPage={currentPage}
        pageLimit={pageLimit}
      />
      <div
        className = {cl.flex}
      >
        <SelectorArrows
          currentPage={currentPage}
          pageLimit={pageLimit}
          leftArrowClickHandler = {leftArrowClickHandler}
          rightArrowClickHandler = {rightArrowClickHandler}
        />
        <SelectorDots
          currentPage={currentPage}
          DotClickHandler = {DotClickHandler}
        />
      </div>
    </>
  )
}

export default HistoryDatesApp;
