import { Link } from 'react-router-dom';
import { days } from '../utils';

import './Calendar.scss'
import StarfruitIcon from '../assets/star-fruit.png'

const daysList: number[] = Array.from({ length: 25 }, (_, i) => i + 1);

export const Calendar = () => {
  return (
    <main className="calendar">
      {daysList.map((day) => (
        <Link 
          key={`day-${day}`} to={`/${day}`}
        >
          {!!days[day]?.complete ? (
            <img
              alt="starfruit"
              title={`Day ${day} complete!`}
              src={StarfruitIcon}
              className="starfruit"
            />
          ) : (day)}
        </Link>
      ))}
    </main>
  );
};
