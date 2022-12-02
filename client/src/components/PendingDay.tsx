import { useEffect } from 'react';

interface PendingDayProps {
  day: number;
  setDay: (day: number) => void;
}

export const PendingDay = ({
  day,
  setDay,
}: PendingDayProps) => {
  useEffect(() => {
    setDay(day)
  }, [day, setDay])
  
  return (
    <main>
      <h2>Day {day} Pending</h2>
    </main>
  );
};
