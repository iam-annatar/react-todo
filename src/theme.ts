import type { MantineColorsTuple } from "@mantine/core";
import { createTheme } from "@mantine/core";

const customColor: MantineColorsTuple = [
  "#ffebe5",
  "#ffd6cd",
  "#ffac9a",
  "#ff7f63",
  "#ff5a36",
  "#ff4118",
  "#ff3407",
  "#e42600",
  "#cc1e00",
  "#b21200",
];

export const theme = createTheme({
  colors: {
    customColor,
  },
});
