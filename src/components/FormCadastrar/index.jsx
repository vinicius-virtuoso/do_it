import {
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { useState } from "react";

function FormCadastrar() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome."),
    email: yup
      .string()
      .required("Digite seu Email.")
      .email("Esse email é invalido"),
    password: yup
      .string()
      .min(8, "Sua senha precisa tem no mínimo 8 caracteres.")
      .required("Digite sua senha."),
    passwordConfirm: yup
      .string()
      .required("Confirmação é obrigatório!")
      .oneOf([yup.ref("password"), null], "As precisam ser iguais"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      toast.success("Conta criada com sucesso!", { theme: "dark" });
      toast.info("Voce foi redirecionado para pagina de login!", {
        theme: "dark",
      });
      setLoading(false);
      history.push("/login");
    }, 1500);
  };

  return (
    <Box maxWidth="400px" w="100%" minH="450px" as={motion.div} m="auto">
      <Heading
        as={Link}
        to="/"
        d="flex"
        alignItems="baseline"
        justifyContent="center"
        gap={2}
        textAlign="center"
        fontSize={["20px", "26px"]}
        fontWeight="light"
        letterSpacing={1}
        w="100%"
      >
        Crie sua conta em{" "}
        <Box as="span" fontSize="42px" fontWeight="bold" color="white">
          do
          <Box as="span" color="orange.500">
            .
          </Box>
          it
        </Box>
      </Heading>
      <Flex
        as="form"
        flexDirection="column"
        onSubmit={handleSubmit(formSubmit)}
        py={[5]}
        px={[5]}
        bg="dark"
        gap={[3]}
        shadow="dark-lg"
      >
        <Box>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name" fontSize="1xl" letterSpacing={1}>
              Nome
            </FormLabel>
            <Input
              id="name"
              {...register("name")}
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.500" }}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email" fontSize="1xl" letterSpacing={1}>
              Email
            </FormLabel>
            <Input
              id="email"
              {...register("email")}
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.500" }}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password" fontSize="1xl" letterSpacing={1}>
              Senha
            </FormLabel>
            <Input
              id="password"
              type="password"
              {...register("password")}
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.500" }}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={errors.passwordConfirm}>
            <FormLabel
              htmlFor="passwordConfirm"
              fontSize="1xl"
              letterSpacing={1}
            >
              Confirme sua senha
            </FormLabel>
            <Input
              id="passwordConfirm"
              type="password"
              {...register("passwordConfirm")}
              focusBorderColor="orange.500"
              _hover={{ borderColor: "orange.500" }}
            />
            <FormErrorMessage>
              {errors.passwordConfirm?.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Button
          mt={4}
          colorScheme="orange"
          isLoading={loading}
          loadingText="Criando conta"
          type="submit"
          fontSize="1xl"
          fontWeight="medium"
          letterSpacing={1}
          color="white"
          disabled={!isDirty || loading}
        >
          Cadastrar
        </Button>
      </Flex>
      <Text
        textAlign="center"
        mt={2}
        d="flex"
        gap={2}
        w="100%"
        justifyContent="center"
      >
        Ja tem uma conta?
        <Box as={Link} to="/login" color="orange.500">
          Faça seu Login.
        </Box>
      </Text>
    </Box>
  );
}

export default FormCadastrar;
