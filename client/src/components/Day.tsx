import { useEffect, useState } from 'react'

import './Day.scss'

import { DayConfig } from '../utils'

interface DayProps extends DayConfig {
  day: number;
  setDay: (day: number) => void;
}

export const Day = ({
  day,
  setDay,
  title,
  partOne,
  partTwo,
  data,
  altText,
  image,
}: DayProps) => {
  const [answerOne, setAnswerOne] = useState<number>(0);
  const [answerTwo, setAnswerTwo] = useState<number>(0);

  const getResults = () => {
    reset()
    const ptOneResult = partOne(data);
    const ptTwoResult = partTwo(data);
    setAnswerOne(ptOneResult);
    setAnswerTwo(ptTwoResult)
  };

  const reset = () => {
    setAnswerOne(0)
    setAnswerTwo(0)
  }

  useEffect(() => {
    setDay(day)
    reset()
  }, [day, setDay])

  return (
    <main>
      <h2>{title}</h2>
      <img
        className="day-image"
        alt={altText}
        src={image}
      />
      <button onClick={getResults}>Get Result</button>
      <h3>Part 1</h3>
      <p>{answerOne}</p>
      <h3>Part 2</h3>
      <p>{answerTwo}</p>

      <a
        className="challenge-link"
        href={`https://adventofcode.com/2022/day/${day}`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        Challenge
      </a>
    </main>
  );
}