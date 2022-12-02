import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Calendar, NotFound, DisplayDay, Header } from './components';
import { days } from './utils'

export const App = () => {
  const [day, setDay] = useState<number>(0)

  return (
    <>
      <BrowserRouter>
        <Header
          day={day}
          setDay={setDay}
        />
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="*" element={<NotFound />} />
          {Object.keys(days).map(key => (
            <Route 
              key={`day-route-${key}`}
              path={`/${key}`}
              element={
                <DisplayDay 
                  day={Number(key)}
                  setDay={setDay}
                  dayConfig={days[Number(key)]}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
};
