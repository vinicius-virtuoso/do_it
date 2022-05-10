import { Flex, Grid, Box } from "@chakra-ui/react";
import React from "react";
import FormLogin from "../components/FormLogin";
import ImgTask from "../assets/undraw.svg";

function Login({ setIsAuth }) {
  return (
    <Flex w="100%" align="center" justify="center" p={[4]} minH="100vh">
      <Grid
        w="100%"
        h="100%"
        align="center"
        justify="center"
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
      >
        <Box
          d={["none", "none", "none", "initial"]}
          bgImage={ImgTask}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
        <FormLogin setIsAuth={setIsAuth} />
      </Grid>
    </Flex>
  );
}

export default Login;
