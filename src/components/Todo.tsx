import { Button, Card, Checkbox, Flex, Image, Text } from "@mantine/core";
import { useState } from "react";

import { ACTIONS } from "../constants";
import { useTodoProvider } from "../hooks/useTodoProvider";
import { theme } from "../theme";
import type { TodoItems } from "../types";

interface TodoProps {
  todo: TodoItems;
}

const Todo = ({ todo }: TodoProps) => {
  const [isComplete, setIsComplete] = useState(todo.complete);
  const { dispatch } = useTodoProvider();

  return (
    <Card bg="#1E1E1E" shadow="md">
      <Flex align="center" justify="space-between">
        <Checkbox
          className="custom-line"
          classNames={{
            label: isComplete ? "my-checkbox-label" : "",
          }}
          styles={{
            input: {
              borderColor: !isComplete ? theme.colors?.customColor?.[4] : "",
              backgroundColor: !isComplete ? "transparent" : "",
            },
            label: {
              fontSize: "1.2rem",
            },
          }}
          checked={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
          label={todo.text}
          color="lime.7"
          radius="xl"
          size="md"
        />
        <Flex align="center" justify="center">
          <Button size="compact-xs" variant="transparent">
            <Image src="/icons/edit.svg" />
          </Button>
          <Button
            onClick={() =>
              dispatch({
                type: ACTIONS.DELETE,
                payload: { ...todo, id: todo.id },
              })
            }
            size="compact-xs"
            variant="transparent"
          >
            <Image src="/icons/trash.svg" />
          </Button>
        </Flex>
      </Flex>
      <Text mt="sm" fz="xs">
        {todo.date}
      </Text>
    </Card>
  );
};

export default Todo;
