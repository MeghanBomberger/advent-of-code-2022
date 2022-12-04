import { useEffect } from 'react';

interface PendingDayProps {
  day: number;
  setDay: (day: number) => void;
  clock: string;
}

export const PendingDay = ({
  day,
  setDay,
  clock
}: PendingDayProps) => {
  useEffect(() => {
    setDay(day)
  }, [day, setDay])
  
  return (
    <main>
      <h2>Day {day} Pending</h2>
      <p>STARTS IN {clock}</p>
    </main>
  );
};
