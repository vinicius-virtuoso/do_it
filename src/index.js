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
      200: "#b5c0d34f",
      400: "#b5c0d34f",
      800: "#b5c0d3",
      900: "#111111",
    },
    dark: "#111111",
    opacityColor: "#120d1d9d",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer autoClose={2000} theme="dark" />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
