import React, { useEffect, useState } from "react";
import {
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { MyButton } from "./../Buttons";
import { VscSaveAs } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const InputTask = ({ setTasks, token, montageTasks }) => {
  const [disabled, setDisabled] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let formatDate = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setDate(formatDate);
  }, [date]);

  const formSubmit = ({ description }) => {
    setLoading(true);
    if (description !== "" && description !== " ") {
      api
        .post(
          "/task",
          {
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_) => {
          setLoading(false);
          montageTasks();
          toast.success("Tarefa Adicionada!", { autoClose: 900 });
        })
        .catch((_) => {
          toast.error("Algo deu errado.");
          setLoading(true);
        });
    }
    reset();
  };

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems={["center", "center", "center", "flex-end"]}
      flexDir={["column", "column", "column", "column", "row"]}
      gap="10px"
    >
      <Text
        as="time"
        dateTime="2022-05-11 20:45"
        fontSize={["11px", "14px", "14px", "1.2rem"]}
      >
        {date}
      </Text>
      <Grid
        as="form"
        onSubmit={handleSubmit(formSubmit)}
        boxSize="border-box"
        gridTemplateColumns={["1fr", "1fr", "70% 30%", "65% auto"]}
        maxW={["100%", "100%", "100%", "660px"]}
        gap={2}
        bg="dark"
        p={["15px", "20px", "0"]}
        h={["120px", "140px", "70px", "50px"]}
        w="100%"
      >
        <InputGroup>
          <InputLeftAddon
            children={<VscSaveAs fontSize="1.5rem" />}
            h="100%"
            bg="orange.500"
            border="transparent"
            color="dark"
          />
          <Input
            boxSize="border-box"
            type="text"
            fontSize={["1rem", "1.3rem", "1.5rem"]}
            w="100%"
            h="100%"
            placeholder="Adicione uma tarefa..."
            borderStart="0"
            _focus={{ borderColor: "orange.500", borderStart: "0" }}
            _hover={{ borderColor: "orange.500", borderStart: "0" }}
            {...register("description")}
            onChange={({ target }) =>
              target.value !== " " ? setDisabled(false) : setDisabled(true)
            }
          />
        </InputGroup>

        <MyButton
          w="100%"
          h="100%"
          maxW="auto"
          py="0"
          px="0"
          fontWeight="light"
          secondary
          borderColor="gray.400"
          borderWidth="1"
          disabled={disabled}
          type="submit"
          isLoading={loading}
        >
          Adicionar
        </MyButton>
      </Grid>
    </Flex>
  );
};

export default InputTask;
