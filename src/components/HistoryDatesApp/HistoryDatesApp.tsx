import { useState } from 'react';
import Caption from '../CaptionComponent/Caption';
import Pages from '../PagesComponent/Pages';
import SelectorArrows from '../SelectorArrowsComponent/SelectorArrows';
import SelectorDots from '../SelectorDotsComponent/SelectorDots';
import SwiperDates from '../SwiperComponent/SwiperDates';
import MainYears from '../YearsComponent/MainYears';
import cl from './HistoryDatesApp.module.scss'

const HistoryDatesApp = () => {
  const [firstYear, setFirstYear] = useState(1980);
  const [secondYear, setSecondYear] = useState(1986);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 6;

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
      <Caption/>
      <hr
        className={cl.spacer}
      />
      <SwiperDates
        firstYear={firstYear}
      />
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
          setCurrentPage={setCurrentPage}
        />
        <SelectorDots
          currentPage={currentPage}
        />
      </div>
    </>
  )
}

export default HistoryDatesApp
