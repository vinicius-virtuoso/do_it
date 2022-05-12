import { Box } from "@chakra-ui/react";
import React from "react";
import FormCadastrar from "../components/FormCadastrar";
import ImgTask from "../assets/undraw.svg";
import { GrinWrapper } from "../components/GridContainers";
import { ContainerContent } from "../components/ContainerContent";

function Cadastrar() {
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
        <FormCadastrar />
      </GrinWrapper>
    </ContainerContent>
  );
}

export default Cadastrar;
