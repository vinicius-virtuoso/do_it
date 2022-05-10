import React from "react";
import { Box } from "@chakra-ui/react";
import HomeContent from "./../components/HomeContent";
import ImgTask from "../assets/undraw.svg";
import { GrinWrapper } from "../components/GridContainers";

export function Home() {
  return (
    <>
      <GrinWrapper>
        <HomeContent />
        <Box
          d={["none", "none", "none", "initial"]}
          bgImage={ImgTask}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
      </GrinWrapper>
    </>
  );
}
