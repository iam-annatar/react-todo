import { Button, Flex, Text, TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import type { FormEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { todayIndicator } from "../lib/Indicator";
import type { AppDispatch, RootStore } from "../store/store";
import { addTodo } from "../store/todo/TodoSlice";
import type { TodoItems } from "../types";

const TodoInput = () => {
  const todos = useSelector((state: RootStore) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const [inputValue, setInputValue] = useState("");
  const existedTodo = todos.find((todo) => todo.text === inputValue);
  const [date, setDate] = useState<Date | null>(null);

  const newTodo: TodoItems = {
    id: Math.floor(Math.random() * 10000),
    completed: false,
    text: inputValue,
    date: date?.toLocaleString(),
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (existedTodo) return;

    if (inputValue && inputValue.length > 2) {
      dispatch(addTodo(newTodo));
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
