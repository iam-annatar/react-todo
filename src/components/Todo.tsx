import {
  Button,
  Card,
  Checkbox,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";

import { theme } from "../theme";
import type { TodoItems } from "../types";

const Todo = ({ id, text, complete, date }: TodoItems) => {
  const [isComplete, setIsComplete] = useState(complete);

  return (
    <Card bg="#1E1E1E" shadow="md">
      <Flex align="center" justify="space-between">
        <Stack>
          <Checkbox
            className="custom-line"
            classNames={{
              label: isComplete ? "my-checkbox-label" : "",
            }}
            styles={{
              input: {
                borderColor: !isComplete ? theme.colors?.customColor?.[4] : "",
                backgroundColor: !isComplete ? "transparent" : "",
              },
              label: {
                fontSize: "1.2rem",
              },
            }}
            checked={isComplete}
            onChange={(e) => setIsComplete(e.target.checked)}
            label={text}
            color="lime.7"
            radius="xl"
            size="md"
          />
          <Text fz="xs">{date}</Text>
        </Stack>
        <Flex align="center" justify="center">
          <Button size="compact-xs" variant="transparent">
            <Image src="/icons/edit.svg" />
          </Button>
          <Button size="compact-xs" variant="transparent">
            <Image src="/icons/trash.svg" />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Todo;
