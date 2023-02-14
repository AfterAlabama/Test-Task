import { FC } from 'react';
import { YearsProps } from '../../utils/Props';
import cl from './MainYears.module.scss';

const MainYears: FC<YearsProps> = ({firstYear, secondYear}) => {
  return (
    <div
      className={cl.yearContainer}
    >
      <h1
        className={cl.first}
      >
        {firstYear}
      </h1>
      <h1
        className={cl.second}
      >
        {secondYear}
      </h1>
    </div>
  )
}

export default MainYears
