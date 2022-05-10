import { Box } from "@chakra-ui/react";
import React from "react";
import FormCadastrar from "../components/FormCadastrar";
import ImgTask from "../assets/undraw.svg";
import { GrinWrapper } from "../components/GridContainers";

function Cadastrar() {
  return (
    <>
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
    </>
  );
}

export default Cadastrar;
