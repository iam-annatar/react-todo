import { Button, Text, TextInput } from "@mantine/core";
import type { FormEvent } from "react";

import { ACTIONS } from "../constants";
import { useTodoProvider } from "../hooks/useTodoProvider";
import type { TodoItems } from "../types";

const TodoInput = () => {
  const { dispatch, inputValue, setInputValue } = useTodoProvider();

  const newTodo: TodoItems = {
    id: Math.floor(Math.random() * 100),
    complete: false,
    text: inputValue,
    date: new Date().toLocaleDateString(),
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue && inputValue.length > 2) {
      dispatch({ type: ACTIONS.ADD, payload: newTodo });
      setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        autoFocus
        style={{ flex: 1 }}
        styles={{
          input: {
            backgroundColor: "transparent",
          },
        }}
        radius="xl"
        size="md"
        placeholder="Write your next task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
    </form>
  );
};

export default TodoInput;
