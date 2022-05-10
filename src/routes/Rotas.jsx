import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./../pages/Home";
import { Flex, Box } from "@chakra-ui/react";

import Cadastrar from "../pages/Cadastrar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function Rotas({ isAuth, setIsAuth }) {
  return (
    <Flex
      as="main"
      w="100%"
      h="100%"
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear-gradient(to-t, #000000 45%, orange.700 100%)"
    >
      <Box maxWidth="1220px" w="100%" height="100%" m="0 auto">
        <>
          {isAuth === false ? (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login setIsAuth={setIsAuth} />
              </Route>
              <Route exact path="/cadastrar">
                <Cadastrar />
              </Route>
              <Route path="*">
                <Home />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard setIsAuth={setIsAuth} />
              </Route>
              <Route exact path="*">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          )}
        </>
      </Box>
    </Flex>
  );
}
