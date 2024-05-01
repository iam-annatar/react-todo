import { Button, Card, Group, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import Confetti from "react-canvas-confetti/dist/presets/fireworks";

import { useTodoProvider } from "../hooks/useTodoProvider";

const Stats = () => {
  const { todos } = useTodoProvider();
  const completedTodos = todos.filter((todo) => todo.complete).length;
  const isFinished = todos.length !== 0 && todos.length === completedTodos;
  const isTodoRemaining = todos.length !== 0 && todos.length > completedTodos;
  const [isVisible, setIsVisible] = useState(false);

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
              {!todos.length ? "Keep track of your Tasks !" : "Todo Done !"}
            </Text>
            <Text c={!isTodoRemaining ? `lime.7` : "customColor.2"} fz="md">
              {!todos.length
                ? null
                : !isTodoRemaining
                  ? "hooray!"
                  : "keep it up."}
            </Text>
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
