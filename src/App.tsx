import { Container } from "@mantine/core";

import Header from "./components/Header";
import Stats from "./components/Stats";

const App = () => {
  return (
    <Container mt="xl" size="xl">
      <Header />
      <Container mt="xl" size="xs">
        <Stats />
      </Container>
    </Container>
  );
};

export default App;
