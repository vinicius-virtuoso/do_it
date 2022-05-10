import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import HomeContent from "./../components/HomeContent";
import ImgTask from "../assets/undraw.svg";

export function Home() {
  return (
    <Flex
      as="section"
      w="100%"
      h="100%"
      minH="100vh"
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        minH="100vh"
        maxWidth="1400px"
        align="center"
        justify="center"
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
      >
        <HomeContent />
        <Box
          d={["none", "none", "none", "initial"]}
          bgImage={ImgTask}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
      </Grid>
    </Flex>
  );
}
