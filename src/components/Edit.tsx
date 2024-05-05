import { Button, Flex, Stack, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import type { FormEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { todayIndicator } from "../lib/Indicator";
import type { AppDispatch } from "../state/store";
import { updateTodo } from "../state/Todo/TodoSlice";
import type { TodoItems } from "../types";

interface EditProps {
  todo: TodoItems;
  onClose: () => void;
}

const Edit = ({ todo, onClose }: EditProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [val, setVal] = useState<string>(todo.text);

  const dateStr = todo.date || "";
  const dateVal = dateStr ? new Date(dateStr) : null;

  const [date, setDate] = useState<Date | null>(dateVal);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (val && val.length > 2) {
      dispatch(
        updateTodo({ ...todo, text: val, date: date?.toLocaleString() }),
      );
      setVal("");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          style={{ flex: 1 }}
          styles={{
            input: {
              backgroundColor: "transparent",
            },
          }}
          radius="xl"
          size="md"
          placeholder="Write your next task"
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
        />
        <DateTimePicker
          w="50%"
          placeholder="Pick Date and Time"
          bg="#1E1E1E"
          value={date}
          onChange={setDate}
          hideOutsideDates
          renderDay={todayIndicator}
          valueFormat="MM/DD/YYYY"
          clearable
        />
      </Stack>
      <Flex gap="sm" justify="center" mt="lg">
        <Button onClick={onClose} variant="filled" color="customColor.5">
          Cancel
        </Button>
        <Button type="submit" variant="filled" color="customColor.5">
          Save
        </Button>
      </Flex>
    </form>
  );
};

export default Edit;
