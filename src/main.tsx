import "./index.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      cssVariablesResolver={(t) => ({
        light: {},
        dark: {
          "--mantine-color-body": t.colors.dark[9],
          "--mantine-color-text": t.colors.yellow[1],
        },
        variables: {},
      })}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
