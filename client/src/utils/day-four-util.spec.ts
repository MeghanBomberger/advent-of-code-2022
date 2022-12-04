import {
  dayFourPartOne,
  dayFourPartTwo,
  elfSectionPairs,
  hasOverlap,
} from './day-four-util'

export const exampleData = 
`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

const exampleElfSections = [
  [
    [2, 3, 4],
    [6, 7, 8],
  ],
  [
    [2, 3],
    [4, 5]
  ],
  [
    [5, 6, 7],
    [7, 8, 9]
  ]
]

describe("Day Four: Camp Cleanup", () => {
  test("Part One", () => {
    expect(elfSectionPairs(exampleData).slice(0, 3)).toStrictEqual(exampleElfSections)
    expect(hasOverlap(exampleData).length).toStrictEqual(4)
    expect(dayFourPartOne(exampleData)).toStrictEqual(2)
  })
  test("Part Two", () => {
    expect(dayFourPartTwo(exampleData)).toStrictEqual(4)
  })
})