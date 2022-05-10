import { Flex } from "@chakra-ui/react";

import React from "react";
import { useHistory } from "react-router-dom";
import { MyButton } from "../components/Buttons";

const Dashboard = () => {
  const history = useHistory();

  function logout() {
    window.localStorage.clear();
    history.push("/");
  }

  return (
    <Flex alignItems="center" justify="center" flexDir="column">
      <h1>Dashboard</h1>
      <MyButton secondary onClick={logout}>
        Sair
      </MyButton>
    </Flex>
  );
};

export default Dashboard;
