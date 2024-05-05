import { Button, Card, Group, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import Confetti from "react-canvas-confetti/dist/presets/fireworks";
import { useSelector } from "react-redux";

import type { RootStore } from "../state/store";

const Stats = () => {
  const todos = useSelector((state: RootStore) => state.todos.todos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const isFinished = todos.length !== 0 && todos.length === completedTodos;
  const isTodoRemaining = todos.length !== 0 && todos.length > completedTodos;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isFinished) {
      setIsVisible(true);
    } else setIsVisible(false);
  }, [isFinished]);

  return (
    <>
      {isVisible ? <Confetti autorun={{ speed: 1, duration: 500 }} /> : null}
      <Card shadow="sm" radius="xl" bg="transparent" withBorder>
        <Group justify="space-evenly" mt="md" mb="xs">
          <Stack gap="0" align="center">
            <Text ta="center" fz="h2" fw="700">
              {!todos.length ? "Keep track of your Tasks!" : "Todo Done !"}
            </Text>
            {todos.length !== 0 ? (
              <Text c={!isTodoRemaining ? `lime.7` : "customColor.2"} fz="md">
                {!isTodoRemaining ? "hooray!" : "keep it up."}
              </Text>
            ) : null}
          </Stack>
          {todos.length !== 0 ? (
            <Button
              variant="filled"
              color={!isTodoRemaining ? "lime.7" : "customColor.5"}
              radius="100%"
              w="8rem"
              h="8rem"
            >
              <Text c="black" fz="2rem">
                {`${completedTodos}/${todos.length}`}
              </Text>
            </Button>
          ) : null}
        </Group>
      </Card>
    </>
  );
};

export default Stats;
