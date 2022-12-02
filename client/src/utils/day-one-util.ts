const caloriesList = (data: string) => {
  return data
    .split('\n\n')
    .map(str => (
      str
        .split('\n')
        .map(numStr => Number(numStr))
    ))
    .map(arr => arr.reduce((a, b) => a + b))
    .sort((a, b) => b - a)
}

export const dayOnePtOne = (data: string): number => {
  console.log(caloriesList(data))
  return caloriesList(data)[0]
}

export const dayOnePtTwo = (data: string): number => caloriesList(data).slice(0, 3).reduce((a, b) => a + b)
