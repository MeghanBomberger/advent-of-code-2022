import {
  dayThreePartOne,
  dayThreePartTwo,
  splitByCompartment,
  misplacedItems,
  itemPriority,
  elfGroups,
  groupCommonItems,
  groupIds
} from './day-three-util'

const exampleData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe("Day Three: Rucksack Reorganization", () => {
  test("Part One", () => {
    expect(splitByCompartment(exampleData).slice(0, 3)).toStrictEqual([
      ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
      ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
      ["PmmdzqPrV", "vPwwTWBwg"]
    ])
    expect(misplacedItems(exampleData)).toStrictEqual([ 'p', 'L', 'P', 'v', 't', 's'])
    expect(itemPriority(exampleData)).toStrictEqual([16, 38, 42, 22, 20, 19])
    expect(dayThreePartOne(exampleData)).toStrictEqual(157)
  })
  test("Part Two", () => {
    expect(elfGroups(exampleData)[0]).toStrictEqual([
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg"
    ])
    expect(groupCommonItems(exampleData)).toStrictEqual(["r", "Z"])
    expect(groupIds(exampleData)).toStrictEqual([18, 52])
    expect(dayThreePartTwo(exampleData)).toStrictEqual(70)
  })
})
