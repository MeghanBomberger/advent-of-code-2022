export const elfSectionPairs = (data: string): number[][][] => {
  const ranges = data.split("\n")
    .map(pairStr => pairStr.split(",")
      .map(range => range.split("-").map(str => Number(str)))
    )
  const pairs = ranges.map(pair => {
    const expandedRanges = pair.map(range => {
      const start = range[0]
      const end = range[1]
      const span = end - start
      const spreadRange = [start]
      for (let i = span; i >= 1; i--) {
        const prev = spreadRange[spreadRange.length - 1]
        spreadRange.push(prev + 1)
      }
      return spreadRange
    })
    return expandedRanges
  })
  return pairs
}

export const hasOverlap = (data: string): number[][][] => {
  const elfPairRanges = elfSectionPairs(data)
  const overlapping = elfPairRanges.filter(pair => {
    const elfA = pair[0]
    const elfB = pair[1]
    let overlap = false
    elfA.forEach(sectionA => {
      if (elfB.includes(sectionA)) {
        overlap = true
      }
    })
    return overlap
  })
  return overlapping
}

export const dayFourPartOne = (data: string) => {
  const overlapping = hasOverlap(data)
  const contained = overlapping.filter(pair => {
    const elfA = pair[0]
    const elfB = pair[1]
    const compareElf = elfA.length >= elfB.length ? elfB : elfA
    const contrastElf = elfA.length >= elfB.length ? elfA : elfB
    let allIncluded = true
    compareElf.forEach(compareSection => {
      if (!contrastElf.includes(compareSection)) {
        allIncluded = false
      }
    })
    return allIncluded
  })
  return contained.length
}

export const dayFourPartTwo = (data: string) => {
  const overlapping = hasOverlap(data)
  return overlapping.length
}


