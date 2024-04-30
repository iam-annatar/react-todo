import { Stack } from "@mantine/core";

import { useTodoProvider } from "../hooks/useTodoProvider";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useTodoProvider();

  if (todos == null) return;

  return (
    <Stack>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </Stack>
  );
};

export default Todos;
