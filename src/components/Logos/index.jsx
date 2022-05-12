import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ fontSize }) => {
  return (
    <Heading
      as={Link}
      to="/"
      color="white"
      fontWeight="normal"
      fontSize={fontSize ? fontSize : ["7xl", "8xl", "9xl"]}
    >
      do
      <Box as="span" color="orange.500">
        .
      </Box>
      it
    </Heading>
  );
};
