export const getCrateStacks = (data: string): string => {
  const splitData = data.split('\n\n')
  return splitData[0]
}

export const getSortInstructions = (data: string): string => {
  const splitData = data.split('\n\n')
  return splitData[1]
}

type Crate = string | null
export const arrPiles = (data: string): Crate[][] => {
  const emptySpaceRegex = /\s\s\s\s/g
  const splitStacks = 
    getCrateStacks(data)
      .replace(emptySpaceRegex, '[ ] ')
      .split('\n')
  const crateStacks =     
      splitStacks.slice(0, splitStacks.length - 1)
      .map(str => (
        str
          .replace(/\s/g, '')
          .split('[')
      ))
      .map(arr => (
        arr.filter(crate => crate !== '')
          .map(crate => crate === ']' ? null : crate[0])
      ))
  return crateStacks
}

const reverse = (matrix: Crate[][]) => matrix.map(row => row.reverse())

const transpose = (matrix: Crate[][]) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < row; column++) {
      let temp = matrix[row][column]
      matrix[row][column] = matrix[column][row]
      matrix[column][row] = temp
    }
  }
  return matrix;
}

export interface Piles {
  [pile: number]: string[];
}

export const rotatePiles = (data: string): Piles => {
  const pilesObj: Piles = {}
  const vertPiles = arrPiles(data)
  const sidePiles = reverse(transpose(vertPiles))
  // @ts-ignore
  const filterPiles: string[][] = sidePiles.map(pile => pile.filter(crate => crate !== null))
  filterPiles.forEach((pile, i) => {
    pilesObj[i] = pile
  })
  return pilesObj
}

interface Step {
  move: number,
  from: number,
  to: number
}
interface Steps {
  [step: number]: Step
}

export const arrSteps = (data: string): Steps => {
  const steps: Steps = {}
  const stepsArr = getSortInstructions(data)
    .split('\n')
    .map(str => (
      str.split(' ')
        .map(subStr => Number(subStr))
        .filter(num => !isNaN(num) && num !== 0)
    ))
  stepsArr.forEach((step, i) => {
    steps[i] = {
      move: step[0],
      from: step[1] - 1,
      to: step[2] - 1
    }
  })
  return steps
}

export const moveCrates = async (piles: Piles, steps: Steps): Piles => {
  const newPiles = {...piles}
  await Object.keys(steps).forEach(key => {
    const step = steps[Number(key)]
    console.log(`STEP ${key}`, step)

    let amount = step.move
    for (let i = 0; i < amount; i++) {
      if (newPiles[step.from]?.length > 0) {
        const crateToMove = newPiles[step.from][newPiles[step.from]?.length - 1]
        console.log(`crateToMove-${i}`, crateToMove)
        newPiles[step.to].push(crateToMove)
        console.log("TO", newPiles[step.to])
        newPiles[step.from].pop()
        console.log("FROM", newPiles[step.from])
      }
    }
  })
  return newPiles
}

export const dayFivePartOne = (data: string): string => {
  return ''
}

export const dayFivePartTwo = (data: string) => {
  return 0
}
