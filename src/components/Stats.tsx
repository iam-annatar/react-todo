import { Button, Card, Group, Stack, Text } from "@mantine/core";

const Stats = () => {
  return (
    <Card shadow="sm" radius="xl" bg="transparent" withBorder>
      <Group justify="space-evenly" mt="md" mb="xs">
        <Stack gap="0" align="center">
          <Text fz="h2" fw="700">
            Todo Done !
          </Text>
          <Text fz="md">Keep it up.</Text>
        </Stack>
        <Button
          variant="filled"
          color="customColor.5"
          radius="100%"
          w="8rem"
          h="8rem"
        >
          <Text c="black" fz="2rem">
            1/3
          </Text>
        </Button>
      </Group>
    </Card>
  );
};

export default Stats;
