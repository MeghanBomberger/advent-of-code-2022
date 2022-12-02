import { Link } from 'react-router-dom'

import './Header.scss'
import CalendarIcon from '../assets/calendar.png'
import ArrowIcon from '../assets/turn-right.png'

interface HeaderProps {
  day: number;
  setDay: (day: number) => void;
}

export const Header = ({
  day,
  setDay,
}: HeaderProps) => {

  return (
    <header>
      <h1>Advent of Code 2022</h1>
      { day !== 0 && (
        <nav>
          {day !== 1 && (
            <Link to={`/${day - 1}`}>
              <button
                className="nav-icon prev"
              >
                <img
                  alt={"Red double arrow pointing left surrounded by green motes."}
                  src={ArrowIcon}
                  title={"Previous Day"}
                />
              </button>
            </Link>
          )}

          <Link to="/">
            <button
              className="nav-icon"
              onClick={() => setDay(0)}
            >
              <img
                alt={"Calendar with snowflake on blue background."}
                src={CalendarIcon}
                title={"Return to Calendar"}
              />
            </button>
          </Link>

          {day !== 25 && (
            <Link to={`/${day + 1}`}>
              <button
                className="nav-icon next"
              >
                <img
                  alt={"Red double arrow pointing right surrounded by green motes."}
                  src={ArrowIcon}
                  title={"Next Day"}
                />
              </button>
            </Link>
          )}
        </nav>
      )}
    </header>
  )
}
