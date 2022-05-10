import { Flex, Box, Grid } from "@chakra-ui/react";
import React from "react";
import FormCadastrar from "../components/FormCadastrar";
import ImgTask from "../assets/undraw.svg";

function Cadastrar() {
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
        <FormCadastrar />
      </Grid>
    </Flex>
  );
}

export default Cadastrar;
