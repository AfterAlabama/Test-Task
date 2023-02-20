import { FC } from "react";
import { BlockProps } from "../../utils/Props";
import cl from "./Block.module.scss";

const Block: FC<BlockProps> = ({ firstYear }) => {
  return (
    <div className={cl.blockContent}>
      <h3>{firstYear}</h3>
      <p>
        Empty block to fill in with necessary information later on if needed
      </p>
    </div>
  );
};

export default Block;
