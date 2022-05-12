import { Box } from "@chakra-ui/react";
import React from "react";
import FormLogin from "../components/FormLogin";
import ImgTask from "../assets/undraw.svg";
import { GrinWrapper } from "./../components/GridContainers/";
import { ContainerContent } from "./../components/ContainerContent";

function Login() {
  return (
    <ContainerContent>
      <GrinWrapper>
        <Box
          d={["none", "none", "none", "initial"]}
          bgImage={ImgTask}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
        <FormLogin />
      </GrinWrapper>
    </ContainerContent>
  );
}

export default Login;
