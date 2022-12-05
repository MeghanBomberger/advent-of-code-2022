import {
  dayFivePartOne,
  dayFivePartTwo,
  getCrateStacks,
  getSortInstructions,
  arrPiles,
  arrSteps,
  rotatePiles,
  moveCrates,
} from './day-five-util'

const exampleData = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const parsedPiles = {
  0: ['Z', 'N'],
  1: ['M', 'C', 'D'],
  2: ['P']
}

const parsedSteps = {
  0: {
    move: 1,
    from: 1,
    to: 0,
  },
  1: {
    move: 3,
    from: 0,
    to: 2
  },
  2: {
    move: 2,
    from: 1,
    to: 0,
  },
  3: {
    move: 1,
    from: 0,
    to: 1,
  }
}

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
      expect(rotatePiles(exampleData)).toStrictEqual(parsedPiles)
    })

    test('get steps prepped', () => {
      expect(getSortInstructions(exampleData)).toStrictEqual(`move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)
      expect(arrSteps(exampleData)).toStrictEqual(parsedSteps)
    })

    test("move crates", async () => {
      await expect(moveCrates(parsedPiles, parsedSteps)).resolves.toStrictEqual({
        0: ["C"],
        1: ["M"],
        2: ["P", "D", "N", "Z"]
      })
    })

    // test('final pt1 answer', () => {
    //   expect(dayFivePartOne(exampleData)).toStrictEqual('CMZ')
    // })
  })

  test('Part Two', () => {
    expect(dayFivePartTwo(exampleData)).toStrictEqual(0)
  })
})
