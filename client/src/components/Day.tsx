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
  const [answerOne, setAnswerOne] = useState<number>();
  const [answerTwo, setAnswerTwo] = useState<number>();

  const getAnswerOne = () => {
    const ptOneResult = partOne(data);
    const ptTwoResult = partTwo(data);
    setAnswerOne(ptOneResult);
    setAnswerTwo(ptTwoResult)
  };

  useEffect(() => {
    setDay(day)
  }, [day, setDay])

  return (
    <main>
      <h2>{title}</h2>
      <img
        className="day-image"
        alt={altText}
        src={image}
      />
      <button onClick={getAnswerOne}>Get Result</button>
      <h3>Part 1</h3>
      <p>{answerOne}</p>
      <h3>Part 2</h3>
      <p>{answerTwo}</p>
    </main>
  );
}