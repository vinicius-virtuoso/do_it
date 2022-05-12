import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiFilePaper2Line, RiDeleteBin4Line } from "react-icons/ri";
import { BsCheck2Square } from "react-icons/bs";

import { VscCalendar } from "react-icons/vsc";
import api from "../../services/api";
import { toast } from "react-toastify";

function Card({ _id, title, date, montageTasks, token }) {
  function taskDelete() {
    api
      .delete(`/task/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        montageTasks();
        toast.warning("Tarefa deletada.");
      })
      .catch((_) => toast.error("Algo deu errado."));
    montageTasks();
  }

  function taskCompleted() {
    api
      .put(
        `/task/${_id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        montageTasks();
        toast.success("Tarefa completada!");
      })
      .catch((_) => toast.error("Algo deu errado."));
  }

  return (
    <Flex
      as="li"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      bg="blackAlpha.600"
      shadow="md"
      width={["100%", "100%", "calc(100% / 2 - 24px)", "calc(100% / 4 - 24px)"]}
      h="calc(100% / 2 - 8px)"
      maxH="300px"
      rounded="md"
      p={2}
      gap={3}
      id={_id}
    >
      <Box w="100%">
        <Text
          as="span"
          d="flex"
          alignItems="center"
          fontSize=".75rem"
          gap={2}
          p={".2rem"}
          flexDir="column"
          w="100%"
        >
          <Flex alignItems="center" gap={2}>
            <VscCalendar fontSize=".75rem" color="white" />
            {date}
          </Flex>
        </Text>
        <Divider />
      </Box>
      <Text
        as="h4"
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        fontSize={["1xl"]}
        gap={2}
        p={"1rem"}
        letterSpacing={1}
      >
        <RiFilePaper2Line fontSize="2rem" color="white" />
        {title}
      </Text>

      <Flex w="100%" align="center" flexDir="column" gap={2}>
        <Divider />
        <Flex gap={2}>
          <Button
            w="100%"
            colorScheme="red"
            fontWeight="normal"
            letterSpacing={1}
            d="flex"
            alignItems="center"
            gap={2}
            fontSize="1rem"
            onClick={() => taskDelete()}
          >
            <RiDeleteBin4Line fontSize="1.3rem" />
            Deletar
          </Button>
          <Button
            w="100%"
            colorScheme="green"
            fontWeight="normal"
            letterSpacing={1}
            d="flex"
            alignItems="center"
            gap={2}
            fontSize="1rem"
            onClick={() => taskCompleted()}
          >
            <BsCheck2Square fontSize="2.3rem" />
            Concluir
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Card;
