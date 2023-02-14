import { FC } from "react";
import { BlockProps } from "../../utils/Props";
import cl from './Block.module.scss';


const Block: FC<BlockProps> = ({ firstYear }) => {
  return (
    <div
      className={cl.blockContent}
    >
      <h3>{firstYear}</h3>
      <p>Уверен, что здесь произошло что-то воистину крутое</p>
    </div>
  );
};

export default Block;
