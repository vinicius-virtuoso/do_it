import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./../pages/Home";
import { Flex } from "@chakra-ui/react";

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
      >
        <>
          <Switch>
            <PublicRoute exact path="/" component={() => <Home />} />
            <PublicRoute exact path="/login" component={() => <Login />} />
            <PublicRoute
              exact
              path="/cadastrar"
              component={() => <Cadastrar />}
            />
            <PrivateRoute
              exact
              path="/dashboard"
              component={() => <Dashboard />}
            />
            {!isAuthenticated ? (
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            ) : (
              <Route path="*">
                <Redirect to="/dashboard" />
              </Route>
            )}
          </Switch>
        </>
      </Flex>
    </BrowserRouter>
  );
}
