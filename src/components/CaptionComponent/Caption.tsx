import { FC } from 'react';
import { CaptionProps } from '../../utils/Props';
import cl from './Caption.module.scss'

const Caption: FC<CaptionProps> = ({number}) => {
  return (
    <h3
      className={cl.caption}
    >
      {number === 1980 && 'Технологии'}
      {number === 1987 && 'Кино'}
      {number === 1994 && 'Литература'}
      {number === 2001 && 'Театр'}
      {number === 2008 && 'Спорт'}
      {number === 2015 && 'Наука'}
    </h3>
  )
}

export default Caption
