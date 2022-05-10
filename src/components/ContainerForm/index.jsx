import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContainerForm = ({ title, children }) => {
  return (
    <Box maxWidth="400px" w="100%" minH="450px" as={motion.div} m="auto">
      <Heading
        as={Link}
        to="/"
        d="flex"
        alignItems="baseline"
        justifyContent="center"
        gap={2}
        textAlign="center"
        fontSize={["20px", "26px"]}
        fontWeight="light"
        letterSpacing={1}
        w="100%"
      >
        {title}{" "}
        <Box as="span" fontSize="42px" fontWeight="bold" color="white">
          do
          <Box as="span" color="orange.500">
            .
          </Box>
          it
        </Box>
      </Heading>
      {children}
    </Box>
  );
};

export const BoxForm = ({ children, onSubmit }) => {
  return (
    <Flex
      as="form"
      flexDirection="column"
      onSubmit={onSubmit}
      py={[5]}
      px={[5]}
      bg="dark"
      gap={[3]}
      shadow="dark-lg"
    >
      {children}
    </Flex>
  );
};
