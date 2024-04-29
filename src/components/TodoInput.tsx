import { Button, Flex, Text, TextInput } from "@mantine/core";
import { useState } from "react";

const TodoInput = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Flex gap="md" align="center" justify="space-between">
      <TextInput
        autoFocus
        style={{ flex: 1 }}
        styles={{
          input: {
            backgroundColor: "transparent",
          },
        }}
        radius="xl"
        size="md"
        placeholder="Write your next task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="filled"
        w="3rem"
        h="3rem"
        p="sm"
        radius="100%"
        color="customColor.5"
      >
        <Text fw="bold" fz="1.5rem" c="black">
          &#43;
        </Text>
      </Button>
    </Flex>
  );
};

export default TodoInput;
