import { useTodoProvider } from "../hooks/useTodoProvider";

const Todos = () => {
  const { todos } = useTodoProvider();

  if (todos == null) return;

  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default Todos;
