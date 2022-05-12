import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import ControlForm from "../ControlForm";
import ButtonForm from "../ButtonForm";
import LinkForm from "./../LinkForm/index";
import { BoxForm, ContainerForm } from "../ContainerForm";
import api from "./../../services/api";

function FormCadastrar() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

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

  const formSubmit = ({ name, email, password }) => {
    const user = { name, email, password };
    setLoading(true);
    api
      .post("/user/register", user)
      .then((res) => {
        setLoading(false);
        toast.success("Cadastro efetuado com sucesso!", { theme: "dark" });
        localStorage.setItem("@Doit:Token", res.data.token);
        localStorage.setItem("@Doit:User", JSON.stringify(res.data.user));
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Algo deu errado. 😓", { theme: "dark" });
        setLoading(false);
      });
  };

  return (
    <ContainerForm title="Crie sua conta em">
      <BoxForm onSubmit={handleSubmit(formSubmit)}>
        <ControlForm
          ref="nameCadastrar"
          label="Nome"
          id="name"
          {...register("name")}
          errors={errors}
        />
        <ControlForm
          ref="emailCadastrar"
          label="Email"
          id="email"
          {...register("email")}
          errors={errors}
        />
        <ControlForm
          ref="senhaCadastrar"
          label="Senha"
          id="password"
          type="password"
          {...register("password")}
          errors={errors}
        />
        <ControlForm
          ref="confirmCadastrar"
          label="Confirme sua senha"
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm")}
          errors={errors}
        />

        <ButtonForm
          loading={loading}
          loadingText="Criando conta"
          isDirty={isDirty}
        >
          Cadastrar
        </ButtonForm>
      </BoxForm>
      <LinkForm
        title="Ja possui uma conta?"
        pathText="Faça seu Login."
        path={"/login"}
      />
    </ContainerForm>
  );
}

export default FormCadastrar;
