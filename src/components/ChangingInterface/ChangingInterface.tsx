import { FC } from "react";
import { ChangingInterfaceProps } from "../../utils/Props";
import Interface from "./Interface";


const ChangingInterface: FC<ChangingInterfaceProps>  = ({currentPage}) => {

  return (
    <>
      {currentPage === 1 && 
      <Interface
        number = {1980}
      />
      }
      {currentPage === 2 && 
      <Interface
        number = {1987}
      />
      }       
      {currentPage === 3 && 
      <Interface
        number = {1994}
      />
      }       
      {currentPage === 4 && 
      <Interface
        number = {2001}
      />
      }       
      {currentPage === 5 && 
      <Interface
        number = {2008}
      />
      }       
      {currentPage === 6 && 
      <Interface
        number = {2015}
      />
      }
    </>
  )
}

export default ChangingInterface
