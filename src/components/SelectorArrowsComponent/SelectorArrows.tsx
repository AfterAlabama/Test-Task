import cl from './SelectorArrows.module.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FC } from 'react';
import { ArrowsProps } from '../../utils/Props';

const SelectorArrows: FC<ArrowsProps> = ({currentPage, pageLimit, setCurrentPage}) => {

  const leftArrowClickHandler = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  };

  const rightArrowClickHandler = () => {
    if(currentPage !== 6){
      setCurrentPage(currentPage + 1)
    }
  };

  return (
    <div
      className={cl.arrows}
    >
      {currentPage === 1 
      ?
        <div
          className={cl.grayed}
        >
          {<AiOutlineArrowLeft/>}
        </div> 
      :
        <div>{<AiOutlineArrowLeft 
          onClick = {leftArrowClickHandler}
        />}</div>
      }
      {currentPage === pageLimit 
      ?
        <div
          className={cl.grayed}
        >
          {<AiOutlineArrowRight/>}
        </div> 
      :
        <div>{<AiOutlineArrowRight 
          onClick = {rightArrowClickHandler}
        />}</div>
      }
    </div>
  )
}

export default SelectorArrows
