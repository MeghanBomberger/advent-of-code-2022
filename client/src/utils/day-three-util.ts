const values = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13, 
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
}

export const splitByCompartment = (data: string): string[][] => {
  const splitData = data.split("\n")
    .map(items => {
      const itemsPerCompartment = items.length / 2
      return [
        items.slice(0, itemsPerCompartment),
        items.slice(itemsPerCompartment, items.length)
      ]
    })
  return splitData
}

export const misplacedItems = (data: string): string[] => {
  const misplacedList: string[] = splitByCompartment(data).map(bag => {
      const compA = bag[0].split("")
      const compB = bag[1].split("")
      return compA.filter(itemA => !!compB.find(itemB => itemB === itemA))[0]
    })
  return misplacedList
}

export const itemPriority = (data: string): number[] => {
  // @ts-ignore
  const priority: number[] = misplacedItems(data).map((item) => values?.[item] || 0)
  return priority
}

export const dayThreePartOne = (data: string): number => {
  return itemPriority(data)?.reduce((a, b) => a + b) || 0
}

export const elfGroups = (data: string): string[][] => {
  let splitData = data.split("\n")
  const groups: string[][] = []
  while (!!splitData.length) {
    groups.push([splitData[0], splitData[1], splitData[2]])
    splitData = splitData.slice(3, splitData.length)
  }
  return groups
}

export const groupCommonItems = (data: string): string[] => {
  const groups = elfGroups(data)
  const commonItems: string[] = groups.map(group => {
    const bagA = group[0].split("")
    const bagB = group[1].split("").filter(itemB => bagA.includes(itemB))
    const bagC = group[2].split("").filter(itemC => bagB.includes(itemC))
    return bagC[0]
  })
  return commonItems
}

export const groupIds = (data: string): number[] => {
  const commonItems: string[] = groupCommonItems(data)
  //@ts-ignore
  const ids: number[] = commonItems.map(item => values[item])
  return ids
}

export const dayThreePartTwo = (data: string): number => {
  return groupIds(data).reduce((a, b) => a + b)
}
