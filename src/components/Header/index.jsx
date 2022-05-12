import { Avatar, Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ContainerContent } from "../ContainerContent";
import { Logo } from "../Logos";
import { MdOutlineExitToApp } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Header = ({ user }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  useEffect(() => {
    let firstName = user.name.split(" ")[0];
    setName(firstName);
  }, [user.name]);

  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <Flex
      as="header"
      w="100%"
      h="90px"
      bg="blackAlpha.300"
      shadow="dark-lg"
      p={[2, 2, 4, 2]}
    >
      <ContainerContent alignItems="center" justifyContent="space-between">
        <Logo fontSize={["3rem", "3.5rem", "3rem", "4rem"]} />
        <Flex alignItems="center" gap={[2, 4]}>
          <Text
            fontSize={[".55rem", ".75rem", ".8rem", ".875rem"]}
            letterSpacing={1}
          >
            Olá,{" "}
            <Box as="span" d="block" fontSize={[".65rem", ".85rem", "1rem"]}>
              {name}
            </Box>
          </Text>
          <Box boxSizing="border-box" d={["none", "none", "initial"]}>
            <Avatar bg="orange.500" boxSize={["2rem", "3rem"]} />
          </Box>
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button
              onClick={logout}
              d="flex"
              fontWeight="normal"
              alignItems="center"
              justifyContent="space-between"
              gap="20xp"
              w={20}
              color="orange.500"
              borderColor="orange.500"
            >
              Sair
              <MdOutlineExitToApp />
            </Button>
          </ButtonGroup>
        </Flex>
      </ContainerContent>
    </Flex>
  );
};

export default Header;
