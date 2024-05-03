import { Button, Flex, Text, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import type { FormEvent } from "react";
import { useState } from "react";

import { ACTIONS } from "../constants";
import { useTodoProvider } from "../hooks/useTodoProvider";
import { todayIndicator } from "../lib/Indicator";
import type { TodoItems } from "../types";

const TodoInput = () => {
  const { todos, dispatch, inputValue, setInputValue } = useTodoProvider();
  const existedTodo = todos.find((todo) => todo.text === inputValue);
  const [date, setDate] = useState<Date | null>(null);

  const newTodo: TodoItems = {
    id: Math.floor(Math.random() * 10000),
    complete: false,
    text: inputValue,
    date: date?.toLocaleString(),
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (existedTodo) return;

    if (inputValue && inputValue.length > 2) {
      dispatch({ type: ACTIONS.ADD, payload: newTodo });
      setInputValue("");
      setDate(null);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextInput
          autoFocus
          styles={{
            input: {
              backgroundColor: "transparent",
            },
          }}
          radius="xl"
          size="md"
          placeholder="Write your next todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Flex align="center" justify="center" gap="sm">
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
          <Button
            type="submit"
            variant="filled"
            w="3rem"
            h="3rem"
            p="sm"
            radius="100%"
            color="customColor.5"
          >
            <Text fw="bold" fz="1.5rem" c="black">
              &#43;
            </Text>
          </Button>
        </Flex>
      </form>
      {existedTodo ? <Text c="red">Already in the List</Text> : null}
    </>
  );
};

export default TodoInput;
