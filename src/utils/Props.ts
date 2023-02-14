
export interface BlockProps {
  firstYear: number
}

export interface DotsProps {
  currentPage: number
  DotClickHandler:(el:number) => void
}

export interface DotProps {
  isChosen?: boolean;
  currentPage: number;
  DotClickHandler:(el:number) => void
}

export interface PageProps {
  currentPage: number;
  pageLimit: number
}

export interface YearsProps {
  firstYear: number;
  secondYear: number
}

export interface ArrowsProps {
  currentPage: number;
  pageLimit: number;
  leftArrowClickHandler: () => void,
  rightArrowClickHandler: () => void,
}

export interface Interfaceprops {
  number: number
}

export interface ChangingInterfaceProps {
  currentPage: number
}

export interface SwiperProps {
  number:number
}

export interface CaptionProps {
  number:number
}