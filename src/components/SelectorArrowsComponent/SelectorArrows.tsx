import cl from './SelectorArrows.module.scss'
import { FC} from 'react';
import { ArrowsProps } from '../../utils/Props';
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';


const SelectorArrows: FC<ArrowsProps> = ({currentPage, pageLimit, leftArrowClickHandler, rightArrowClickHandler}) => {

  return (
    <div
      className={cl.arrows}
    >
      {currentPage === 1 
      ?
        <div
          className={cl.grayed}
        >
          {<MdArrowBackIos/>}
        </div> 
      :
        <div
          onClick = {leftArrowClickHandler}
        >{<MdArrowBackIos/>}</div>
      }
      {currentPage === pageLimit 
      ?
        <div
          className={cl.grayed}
        >
          {<MdArrowForwardIos/>}
        </div> 
      :
        <div
          onClick = {rightArrowClickHandler}
        >{<MdArrowForwardIos/>}</div>
      }
    </div>
  )
}

export default SelectorArrows
