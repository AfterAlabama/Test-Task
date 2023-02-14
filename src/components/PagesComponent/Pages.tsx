import { FC } from 'react';
import { PageProps } from '../../utils/Props';
import cl from './Pages.module.scss';

const Pages: FC<PageProps> = ({currentPage, pageLimit}) => {
  return (
    <div
      className={cl.pages}
    >
      <h4>0{currentPage}/0{pageLimit}</h4>
    </div>
  )
}

export default Pages
