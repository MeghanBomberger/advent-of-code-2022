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

export const arrSteps = (data: string): number[][] => {
  const steps = getSortInstructions(data)
    .split('\n')
    .map(str => (
      str.split(' ')
        .map(subStr => Number(subStr))
        .filter(num => !isNaN(num) && num !== 0)
    ))
  return steps
}

const logIf = (i: number) => true

const moveCrate = (
  stacks: Piles,
  fromIndex: number,
  toIndex: number,
  i: number,
  j: number,
  step: number[]
) => {
  const fromPile = stacks[fromIndex]
  const toPile = stacks[toIndex]
  const crateToMove = !fromPile?.length 
    ? null 
    : fromPile.length === 1 
      ? fromPile[0] 
      : fromPile[fromPile.length - 1]
  // if (!crateToMove && logIf(i)) {
  //   console.error(i, j, step, fromPile, toPile, crateToMove)
  // }
  const newFromPile = !fromPile?.length ? [] : fromPile.slice(0, fromPile.length - 1)
  const newToPile = !crateToMove 
    ? toPile
    : !!toPile?.length && toPile.length > 0 
      ? [...toPile, crateToMove] 
      : [crateToMove]
  if (logIf(i) && (
    newFromPile.filter(crate => !crate)?.length ||
    newToPile.filter(crate => !crate)?.length
  )) {
    console.error(i, j, step, fromPile, newFromPile, toPile, newToPile)
  }
  const newPiles = { ...stacks }
  newPiles[toIndex] = newToPile
  newPiles[fromIndex] = fromPile?.length <= 1 ? [] : newFromPile
  if (logIf(i)) {
    console.log(stacks)
    console.log(fromPile)
    console.log(crateToMove)
    console.log(newPiles)
  }
  return newPiles
}

const moveCrates = (data: string) => {
  let piles = rotatePiles(data)
  const steps = arrSteps(data)

  steps.forEach((step, i) => {
    const fromIndex = step[1] - 1
    logIf(i) && console.log("FROM INDEX:", fromIndex)
    const toIndex = step[2] - 1
    logIf(i) && console.log("TO INDEX:", toIndex)
    const amountToMove = step[0]
    logIf(i) && console.log("# OF CRATES: ", amountToMove)
    for (let j = 0; j <= amountToMove; j++) {
      logIf(i) && console.log(`STEP: ${i} - MOVE: ${j}`)
      piles = moveCrate(piles, fromIndex, toIndex, i, j, step)
    }
  })

  return piles
}

export const dayFivePartOne = (data: string): string => {
  const finalPosition = moveCrates(data)
  const topCrates = Object.keys(finalPosition).map(key => finalPosition[Number(key)][finalPosition[Number(key)].length - 1]).map(crate => !crate ? ' ' : crate)
  console.log(topCrates)
  return topCrates.join("")
}

export const dayFivePartTwo = (data: string) => {
  return 0
}
