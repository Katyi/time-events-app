import { MouseEvent, RefObject } from 'react';
import { arrowStatus } from '@/components/timePeriods/arrows/Arrows';

export interface dataProps {
  data: {
    id: string;
    index: number;
    label: string;
    yearsInterval: {
      start: number;
      last: number;
    };
    details: {
      year: number;
      description: string;
    }[];
  }[];
}

export interface ArrowProps {
  currentPointIndex: number;
  pointsLength: number;
  arrowStatus: arrowStatus;
  controlClickHandler: (e: MouseEvent, id: number) => void;
}

export interface WrapperProps {
  children: ReactNode;
}

export interface BulletsPaginationProps {
  currentPointIndex: number;
  pointsLength: number;
  bulletClickHandler: (id: number) => void;
}

export interface ShowPagesChangesProps {
  currentPointIndex: number;
  pointsLength: number;
}

export interface slideData {
  year: number;
  description: string;
}

export interface SliderProps {
  sliderData: slideData[];
  isMobileScreen: boolean;
}

export interface PointData {
  id: string;
  index: number;
  label: string;
}

export interface TimeIntervalsProps {
  currentPointIndex: number;
  startYear: number;
  lastYear: number;
  pointsData: PointData[];
  rotationDuration: number;
  bulletClickHandler: (id: number) => void;
  arrowStatus: arrowStatus;
  arrowControlsStatusSetter: (status: arrowStatus) => void;
}

export interface PointProps {
  index: number;
  label: string;
  prevPointRef?: RefObject<HTMLDivElement>;
  prevPointNumberRef?: RefObject<HTMLSpanElement>;
  bulletClickHandler: (id: number) => void;
}

export interface YearsIntervalProps {
  startYear: number;
  lastYear: number;
}
