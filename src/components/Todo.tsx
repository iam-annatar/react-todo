import {
  Button,
  Card,
  Checkbox,
  Flex,
  Image,
  Modal,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ChangeEvent } from "react";

import { ACTIONS } from "../constants";
import { useTodoProvider } from "../hooks/useTodoProvider";
import { theme } from "../theme";
import type { TodoItems } from "../types";
import Edit from "./Edit";

interface TodoProps {
  todo: TodoItems;
}

const Todo = ({ todo }: TodoProps) => {
  const { dispatch } = useTodoProvider();
  const [opened, { open, close }] = useDisclosure(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: { ...todo, complete: e.target.checked },
    });
  };

  return (
    <Card bg="#1E1E1E" shadow="md">
      <Flex align="center" justify="space-between">
        <Checkbox
          className="custom-line"
          classNames={{
            label: todo.complete ? "my-checkbox-label" : "",
          }}
          styles={{
            input: {
              borderColor: !todo.complete ? theme.colors?.customColor?.[4] : "",
              backgroundColor: !todo.complete ? "transparent" : "",
            },
            label: {
              fontSize: "1.2rem",
            },
          }}
          checked={todo.complete}
          onChange={handleCheckboxChange}
          label={todo.text}
          color="lime.7"
          radius="xl"
          size="md"
        />
        <Flex align="center" justify="center">
          <Button
            onClick={open}
            styles={{
              root: {
                outline: "none",
              },
            }}
            size="compact-xs"
            variant="transparent"
          >
            <Image src="/icons/edit.svg" />
          </Button>
          <Modal title="Edit" opened={opened} onClose={close} centered>
            <Edit onClose={close} todo={todo} />
          </Modal>
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
