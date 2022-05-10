import { Button, Box, Flex } from "@chakra-ui/react";

import React from "react";
import { useHistory } from "react-router-dom";

const Dashboard = ({ setIsAuth }) => {
  const history = useHistory();

  function logout() {
    setIsAuth(false);
    window.localStorage.clear();
    history.push("/");
  }

  return (
    <Flex alignItems="center" justify="center" flexDir="column">
      <h1>Dashboard</h1>
      <Button
        mt={4}
        colorScheme="orange"
        type="submit"
        fontSize="1xl"
        fontWeight="medium"
        letterSpacing={1}
        color="white"
        onClick={logout}
      >
        Sair
      </Button>
    </Flex>
  );
};

export default Dashboard;
