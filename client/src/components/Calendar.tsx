import React from 'react';
import { Link } from 'react-router-dom';

import './Calendar.scss'

const days: number[] = Array.from({ length: 25 }, (_, i) => i + 1);

export const Calendar = () => {
  return (
    <main className="calendar">
      {days.map((day) => (
        <Link 
          key={`day-${day}`} to={`/${day}`}
        >
          {day}
        </Link>
      ))}
    </main>
  );
};
