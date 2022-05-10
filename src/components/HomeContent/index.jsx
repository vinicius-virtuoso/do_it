import React from "react";
import { Flex, Heading, Box, Button } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

const HomeContent = () => {
  const history = useHistory();

  return (
    <Flex
      h="100%"
      maxW="auto"
      justify="center"
      align="center"
      direction="column"
      px={[2, 8, 16]}
      py={[4, 8, 16]}
    >
      <Box
        maxW={["100%", "100%", "100%", "auto"]}
        d="flex"
        flexDir="column"
        align="center"
        justify={["center", "flex-start"]}
        textAlign={["center", "center", "center", "left"]}
      >
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
        <Box as="p" color="gray.500" fontSize={["1xl", "2xl", "4xl", "2xl"]}>
          Organize-se de forma fácil e efetiva
        </Box>
        <Flex justify="center" w="100%" gap={[4, 5]} mt={[4, 5]}>
          <Button
            onClick={() => history.push("/cadastrar")}
            minWidth={[120, 190, 200]}
            maxWidth={[120, 190, 200]}
            colorScheme="orange"
            fontSize={["1xl", "2xl"]}
            fontWeight="medium"
            letterSpacing={1}
            color="white"
            border="2px solid transparent"
            shadow="xl"
            py={[2, 4, 7]}
            px={[2, 4, 6]}
          >
            Cadastre-se
          </Button>
          <Button
            onClick={() => history.push("/login")}
            minWidth={[120, 190, 200]}
            maxWidth={[120, 190, 200]}
            colorScheme="orange"
            fontSize={["1xl", "2xl"]}
            fontWeight="medium"
            letterSpacing={1}
            color="orange.500"
            borderWidth={2}
            shadow="xl"
            py={[2, 4, 7]}
            px={[2, 4, 6]}
            variant="outline"
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeContent;
