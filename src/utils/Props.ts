
export interface BlockProps {
  firstYear: number
}

export interface DotsProps {
  currentPage: number
}

export interface DotProps {
  isChosen?: boolean
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
  setCurrentPage: (curPage: number) => void
}