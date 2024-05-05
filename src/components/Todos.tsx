import { Stack, Tabs, Text } from "@mantine/core";
import { useSelector } from "react-redux";

import type { RootStore } from "../store/store";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector((state: RootStore) => state.todos.todos);

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const finishTodos = todos.filter((todo) => todo.completed);

  if (todos == null) return;

  return (
    <Tabs keepMounted={false} mb="lg" color="customColor.3" defaultValue="All">
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
