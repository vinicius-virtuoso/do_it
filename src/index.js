import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// example theme
const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    gray: {
      100: "#1A202C",
      200: "#4A5568",
      800: "#b5c0d3",
    },
    dark: "#111111",
    opacityColor: "#120d1d9d",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
