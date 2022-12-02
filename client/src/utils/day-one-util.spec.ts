import { dayOnePtOne, dayOnePtTwo } from './day-one-util';

const exampleData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe('Day 1: Calorie Counting', () => {
  test('Part 1', () => {
    expect(dayOnePtOne(exampleData)).toStrictEqual(24000);
  });
  test('Part 2', () => {
    expect(dayOnePtTwo(exampleData)).toStrictEqual(45000);
  })
});
