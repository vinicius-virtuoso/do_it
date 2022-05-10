import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Heading
      as={Link}
      to="/"
      color="white"
      fontWeight="normal"
      fontSize={["6xl", "9xl"]}
    >
      do
      <Box as="span" color="orange.500">
        .
      </Box>
      it
    </Heading>
  );
}

export default Logo;
