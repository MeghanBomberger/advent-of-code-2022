import { DayConfig } from "../utils"
import { Day } from './Day'
import { PendingDay } from './PendingDay'

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
  return !!dayConfig?.complete && !!dayConfig?.title
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
      />
    )
}
