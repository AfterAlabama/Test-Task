
import { FC } from 'react';
import { DotsProps } from '../../utils/Props';
import Dot from './Dot';
import cl from './SelectorDots.module.scss';

const SelectorDots: FC<DotsProps> = ({ currentPage }) => {


  return (
    <div
      className={cl.DotContainer}
    >
      {currentPage === 1 ? <Dot isChosen = {true} /> : <Dot/>}
      {currentPage === 2 ? <Dot isChosen = {true} /> : <Dot/>}
      {currentPage === 3 ? <Dot isChosen = {true} /> : <Dot/>}
      {currentPage === 4 ? <Dot isChosen = {true} /> : <Dot/>}
      {currentPage === 5 ? <Dot isChosen = {true} /> : <Dot/>}
      {currentPage === 6 ? <Dot isChosen = {true} /> : <Dot/>}
    </div>
  );
};

export default SelectorDots;
