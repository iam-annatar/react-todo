import { Stack, Tabs, Text } from "@mantine/core";

import { useTodoProvider } from "../hooks/useTodoProvider";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useTodoProvider();

  const pendingTodos = todos.filter((todo) => !todo.complete);
  const finishTodos = todos.filter((todo) => todo.complete);

  if (todos == null) return;

  return (
    <Tabs keepMounted={false} color="customColor.3" defaultValue="All">
      <Tabs.List grow mb="md">
        <Tabs.Tab fz="lg" value="All">
          All
        </Tabs.Tab>
        <Tabs.Tab fz="lg" value="Pending">
          Pending
        </Tabs.Tab>
        <Tabs.Tab fz="lg" value="Completed">
          Completed
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="All">
        <Stack>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })
          ) : (
            <Text ta="center" fw="bold">
              Nothing to Show !
            </Text>
          )}
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="Pending">
        <Stack>
          {pendingTodos.length > 0 ? (
            pendingTodos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })
          ) : (
            <Text ta="center" fw="bold">
              Nothing to Show !
            </Text>
          )}
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="Completed">
        <Stack>
          {finishTodos.length > 0 ? (
            finishTodos.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })
          ) : (
            <Text ta="center" fw="bold">
              Nothing to Show !
            </Text>
          )}
        </Stack>
      </Tabs.Panel>
    </Tabs>
  );
};

export default Todos;
