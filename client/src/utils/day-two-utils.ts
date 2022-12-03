const parsedData = (data: string) => {
  const splitData = data.split('\n')
    .map(str => str.split(" "))
  return splitData
}

interface ScoreChart {
  [key: string]: {
    [key: string] : number
  }
}

const scoreDictionary: ScoreChart = {
  X: {
    A: 1 + 3,
    B: 1 + 0,
    C: 1 + 6,
  },
  Y: {
    A: 2 + 6,
    B: 2 + 3,
    C: 2 + 0,
  },
  Z: {
    A: 3 + 0,
    B: 3 + 6,
    C: 3 + 3,
  }
}

interface Score {
  [key: string]: number;
}

const choiceScore: Score = {
  rock: 1,
  paper: 2,
  scissors: 3
}

const winScore: Score = {
  X: 0,
  Y: 3,
  Z: 6
}

const choiceDictionary: ScoreChart = {
  X: {
    A: choiceScore['scissors'],
    B: choiceScore['rock'],
    C: choiceScore['paper']
  },
  Y: {
    A: choiceScore['rock'],
    B: choiceScore['paper'],
    C: choiceScore['scissors']
  },
  Z: {
    A: choiceScore['paper'],
    B: choiceScore['scissors'],
    C: choiceScore['rock']
  }
}


export const dayTwoPartOne = (data: string) => {
  const matches = parsedData(data)
  const scores = matches.map(pair => scoreDictionary[pair[1]][pair[0]])
  return scores.reduce((a, b) => a + b)
}

export const dayTwoPartTwo = (data: string) => {
  const matches = parsedData(data)
  const scores = matches.map(pair => [
    winScore[pair[1]], 
    choiceDictionary[pair[1]][pair[0]]
  ].reduce((a, b) => a + b))
  // @ts-ignore
  return scores.reduce((a, b) => a + b)
}