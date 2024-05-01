import { Button, Card, Group, Stack, Text } from "@mantine/core";

import { useTodoProvider } from "../hooks/useTodoProvider";

const Stats = () => {
  const { todos } = useTodoProvider();
  const completedTodos = todos.filter((todo) => todo.complete).length;

  const isTodoRemaining = todos.length && todos.length > completedTodos;

  return (
    <Card shadow="sm" radius="xl" bg="transparent" withBorder>
      <Group justify="space-evenly" mt="md" mb="xs">
        <Stack gap="0" align="center">
          <Text fz="h2" fw="700">
            {!todos.length
              ? "Keep track of your Todo list !"
              : isTodoRemaining
                ? "Todo Done !"
                : "All Done !"}
          </Text>
          <Text c={!isTodoRemaining ? `lime.7` : "customColor.2"} fz="md">
            {!todos.length
              ? null
              : !isTodoRemaining
                ? "horray!"
                : "keep it up."}
          </Text>
        </Stack>
        {todos.length ? (
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
  );
};

export default Stats;
