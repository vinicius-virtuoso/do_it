import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function FormLogin({ setIsAuth }) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email invalido.").required("Digite seu Email."),
    password: yup.string().required("Digite sua senha."),
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
      setIsAuth(true);
      toast.success("Login efetuado com sucesso!", { theme: "dark" });
      setLoading(false);
      history.push("/dashboard");
      window.localStorage.setItem("Token", true);
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
        fontSize={["16px", "26px"]}
        fontWeight="light"
        letterSpacing={1}
        w="100%"
      >
        Entre com sua conta{" "}
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

        <Button
          mt={4}
          colorScheme="orange"
          isLoading={loading}
          loadingText="Entrando..."
          type="submit"
          fontSize="1xl"
          fontWeight="medium"
          letterSpacing={1}
          color="white"
          disabled={!isDirty || loading}
        >
          Entrar
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
        Não possui uma conta?
        <Box as={Link} to="/cadastrar" color="orange.500">
          Faça seu Cadastro.
        </Box>
      </Text>
    </Box>
  );
}

export default FormLogin;
