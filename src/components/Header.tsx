import { Flex, Image, Title } from "@mantine/core";

const Header = () => {
  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <Title order={1}>AM</Title>
        <Title order={1} c="customColor.5">
          TODO
        </Title>
      </Flex>
      <Image w="4rem" h="4rem" src="/icons/react.svg" />
    </Flex>
  );
};

export default Header;
