import { Container, Stack } from "@mantine/core";

import { Header, Stats, TodoInput, Todos } from "./components";

const App = () => {
  return (
    <Container mt="xl" size="xl">
      <Header />
      <Container mt="xl" size="sm">
        <Stack gap="xl">
          <Stats />
          <TodoInput />
          <Todos />
        </Stack>
      </Container>
    </Container>
  );
};

export default App;
