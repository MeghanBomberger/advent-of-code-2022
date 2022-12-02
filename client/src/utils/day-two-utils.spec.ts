import { dayTwoPartOne, dayTwoPartTwo } from './day-two-utils'

const exampleData = `A Y
B X
C Z`

describe.only("Day Two: Rock Paper Scissors", () => {
  test("Part One", () => {
    expect(dayTwoPartOne(exampleData)).toStrictEqual(15)
  })
  test("Part Two", () => {
    expect(dayTwoPartTwo(exampleData)).toStrictEqual(12)
  })
})