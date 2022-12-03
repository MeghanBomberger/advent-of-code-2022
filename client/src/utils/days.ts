import {
  dayOneData, 
  dayThreeData, 
  dayTwoData,
} from '../data'

import { dayOnePtOne, dayOnePtTwo } from './day-one-util'
import { dayTwoPartOne, dayTwoPartTwo } from './day-two-utils';
import { dayThreePartOne, dayThreePartTwo } from './day-three-util';

import FoodIcon from '../assets/groceries.png'
import RPSIcon from '../assets/rock-paper-scissors.png'

export interface DayConfig {
  complete: boolean;
  title: string;
  data: string;
  partOne: (data: string) => number;
  partTwo: (data: string) => number;
  altText: string;
  image: string;
}

interface DaysConfig {
  [key: number]: Partial<DayConfig>;
}

export const days: DaysConfig = {
  1: {
    complete: true,
    title: "Day One: Counting Calories",
    data: dayOneData,
    partOne: dayOnePtOne,
    partTwo: dayOnePtTwo,
    altText: "Elf Snacks",
    image: FoodIcon,
  },
  2: {
    complete: true,
    title: "Day Two: Rock Paper Scissors",
    data: dayTwoData,
    partOne: dayTwoPartOne,
    partTwo: dayTwoPartTwo,
    altText: "Rock Paper Scissors",
    image: RPSIcon,
  },
  3: {
    complete: true,
    title: "Day Three: ???",
    data: dayThreeData,
    partOne: dayThreePartOne,
    partTwo: dayThreePartTwo,
    altText: "",
    image: RPSIcon,
  },
  4: {
    complete: false,
  },
  5: {
    complete: false,
  },
  6: {
    complete: false,
  },
  7: {
    complete: false,
  },
  8: {
    complete: false,
  },
  9: {
    complete: false,
  },
  10: {
    complete: false,
  },
  11: {
    complete: false,
  },
  12: {
    complete: false,
  },
  13: {
    complete: false,
  },
  14: {
    complete: false,
  },
  15: {
    complete: false,
  },
  16: {
    complete: false,
  },
  17: {
    complete: false,
  },
  18: {
    complete: false,
  },
  19: {
    complete: false,
  },
  20: {
    complete: false,
  },
  21: {
    complete: false,
  },
  22: {
    complete: false,
  },
  23: {
    complete: false,
  },
  24: {
    complete: false,
  },
  25: {
    complete: false,
  },
}
