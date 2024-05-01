import { Button, Flex, TextInput } from "@mantine/core";
import type { FormEvent } from "react";
import { useState } from "react";

import { ACTIONS } from "../constants";
import { useTodoProvider } from "../hooks/useTodoProvider";
import type { TodoItems } from "../types";

interface EditProps {
  todo: TodoItems;
  onClose: () => void;
}

const Edit = ({ todo, onClose }: EditProps) => {
  const { dispatch } = useTodoProvider();
  const [val, setVal] = useState<string>(todo.text);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.EDIT, payload: { ...todo, text: val } });
    setVal("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
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
