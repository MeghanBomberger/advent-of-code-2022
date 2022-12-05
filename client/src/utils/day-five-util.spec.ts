import {
  dayFivePartOne,
  dayFivePartTwo,
  getCrateStacks,
  getSortInstructions,
  arrPiles,
  arrSteps,
  rotatePiles,
} from './day-five-util'

const exampleData = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

describe('Day Five', () => {
  describe('Part One', () => {
    test('get crates prepped', () => {
      expect(getCrateStacks(exampleData)).toStrictEqual(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `)
      expect(arrPiles(exampleData)).toStrictEqual([
        [null, 'D', null],
        ['N', 'C', null],
        ['Z', 'M', 'P']
      ])
      expect(rotatePiles(exampleData)).toStrictEqual([
        ['Z', 'N'],
        ['M', 'C', 'D'],
        ['P']
      ])
    })

    test('get steps prepped', () => {
      expect(getSortInstructions(exampleData)).toStrictEqual(`move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)
      expect(arrSteps(exampleData)[0]).toStrictEqual([1,2,1])
      expect(arrSteps(exampleData)[1]).toStrictEqual([3,1,3])
      expect(arrSteps(exampleData)[2]).toStrictEqual([2,2,1])
      expect(arrSteps(exampleData)[3]).toStrictEqual([1,1,2])
    })

    test('final pt1 answer', () => {
      expect(dayFivePartOne(exampleData)).toStrictEqual('CMZ')
    })
  })

  test('Part Two', () => {
    expect(dayFivePartTwo(exampleData)).toStrictEqual(0)
  })
})
