import { Container, Stack } from "@mantine/core";

import { Header, Stats, TodoInput } from "./components";

const App = () => {
  return (
    <Container mt="xl" size="xl">
      <Header />
      <Container mt="xl" size="xs">
        <Stack gap="xl">
          <Stats />
          <TodoInput />
        </Stack>
      </Container>
    </Container>
  );
};

export default App;
