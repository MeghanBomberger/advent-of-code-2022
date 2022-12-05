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
import BackpackIcon from '../assets/backpack.png'
import GridIcon from '../assets/pixels.png'
import { dayFourData } from '../data/day-four-data';
import { dayFourPartOne, dayFourPartTwo } from './day-four-util';
import { dayFiveData } from '../data/day-five-data';
import { dayFivePartOne, dayFivePartTwo } from './day-five-util';

export interface DayConfig {
  complete: boolean;
  title: string;
  data: string;
  partOne: any;
  partTwo: any;
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
    title: "Day Three: Rucksack Reorganization",
    data: dayThreeData,
    partOne: dayThreePartOne,
    partTwo: dayThreePartTwo,
    altText: "Elf packs",
    image: BackpackIcon,
  },
  4: {
    complete: true,
    title: "Day Four: Camp Cleanup",
    data: dayFourData,
    partOne: dayFourPartOne,
    partTwo: dayFourPartTwo,
    altText: "Camp clean up sections",
    image: GridIcon,
  },
  5: {
    complete: false,
    title: "Day Five: ???",
    data: dayFiveData,
    partOne: dayFivePartOne,
    partTwo: dayFivePartTwo,
    altText: "Camp clean up sections",
    image: GridIcon,
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
