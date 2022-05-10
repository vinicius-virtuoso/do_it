import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./../pages/Home";
import { Flex, Box } from "@chakra-ui/react";

import Cadastrar from "../pages/Cadastrar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default function Rotas() {
  return (
    <BrowserRouter>
      <Flex
        as="main"
        w="100%"
        h="100%"
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear-gradient(to-t, #000000 45%, orange.700 100%)"
        px={[2, 0]}
      >
        <Box maxWidth="1220px" w="100%" height="100%" m="0 auto">
          <>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <PublicRoute path="/login" component={() => <Login />} />
              <PublicRoute path="/cadastrar" component={() => <Cadastrar />} />
              <PrivateRoute path="/dashboard" component={() => <Dashboard />} />
            </Switch>
          </>
        </Box>
      </Flex>
    </BrowserRouter>
  );
}
