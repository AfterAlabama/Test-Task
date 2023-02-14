
import { FC } from 'react';
import { DotsProps } from '../../utils/Props';
import Dot from './Dot';
import cl from './SelectorDots.module.scss';

const SelectorDots: FC<DotsProps> = ({ currentPage, DotClickHandler }) => {


  return (
    <div
      className={cl.DotContainer}
    >
      {currentPage === 1 ? 
      <Dot 
        isChosen = {true} 
        currentPage={1}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={1}
        DotClickHandler={DotClickHandler}
      />}
      {currentPage === 2 ? 
      <Dot 
        isChosen = {true} 
        currentPage={2}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={2}
        DotClickHandler={DotClickHandler}
      />}
      {currentPage === 3 ? 
      <Dot 
        isChosen = {true} 
        currentPage={3}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={3}
        DotClickHandler={DotClickHandler}
      />}
      {currentPage === 4 ? 
      <Dot 
        isChosen = {true} 
        currentPage={4}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={4}
        DotClickHandler={DotClickHandler}
      />}
      {currentPage === 5 ? 
      <Dot 
        isChosen = {true} 
        currentPage={5}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={5}
        DotClickHandler={DotClickHandler}
      />}
      {currentPage === 6 ? 
      <Dot 
        isChosen = {true} 
        currentPage={6}
        DotClickHandler={DotClickHandler}
      /> : 
      <Dot 
        currentPage={6}
        DotClickHandler={DotClickHandler}
      />}
    </div>
  );
};

export default SelectorDots;
