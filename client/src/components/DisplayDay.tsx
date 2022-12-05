import { useCallback, useEffect, useState } from "react";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'

import { DayConfig } from "../utils"
import { Day } from './Day'
import { PendingDay } from './PendingDay'

dayjs.extend(relativeTime)
dayjs.extend(duration)

interface DisplayDayProps {
  dayConfig: Partial<DayConfig>;
  day: number;
  setDay: (day: number) => void;
}

const dummyFunc = (data: string) => 0

export const DisplayDay = ({
  day,
  setDay,
  dayConfig,
}: DisplayDayProps) => {
  const startTime = dayjs(`12-${day}-2022 12:00:00 AM EST`)
  const [now, setNow] = useState<string>(dayjs().format('M-D-YYYY HH:mm:ss A'))
  const [clock, setClock] = useState<string>('0:00:00:00')
  const [isLive, setIsLive] = useState<boolean>(false)

  const refreshClock = useCallback(() => {
    const time = startTime.diff(dayjs(), 's')
    const seconds = time%60
    const minutes = ((time - seconds) / 60)%60
    const hours = ((time - seconds - (minutes * 60)) / 60 / 60)%24
    const days = (time - seconds - (minutes * 60) - (hours * 60 * 60)) / 60 / 60 / 24
    const formattedTime = `${days > 0 ? `${days}:` : ''}${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    setClock(formattedTime)
    if (time <= 0) {
      setIsLive(true)
    }
  }, [now, day])

  useEffect(() => {
    refreshClock()
  }, [now, startTime])

  // useEffect(() => {
  //   const timerId = setInterval(refreshClock, 1000);
  //   return function cleanup() {
  //     clearInterval(timerId);
  //   };
  // }, [])

  return !!isLive && !!dayConfig?.title
    ? (
      <Day
        complete={dayConfig?.complete || false}
        day={Number(day)}
        setDay={setDay}
        title={dayConfig?.title || ""}
        data={dayConfig?.data || ""}
        partOne={dayConfig?.partOne || dummyFunc}
        partTwo={dayConfig?.partTwo || dummyFunc}
        altText={dayConfig?.altText || ""}
        image={dayConfig?.image || ""}
      />
    )
    : (
      <PendingDay
        day={Number(day)}
        setDay={setDay}
        clock={clock}
      />
    )
}
