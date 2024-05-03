import { Indicator } from "@mantine/core";
import type { DatePickerProps } from "@mantine/dates";

export const todayIndicator: DatePickerProps["renderDay"] = (date: Date) => {
  const day = date.getDate();
  const mounth = date.getMonth();
  const year = date.getFullYear();
  const currentDay = new Date().getDate();
  const currentMount = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <Indicator
      size={6}
      color="lime.5"
      offset={-5}
      disabled={
        day !== currentDay || mounth !== currentMount || year !== currentYear
      }
    >
      <div>{day}</div>
    </Indicator>
  );
};
