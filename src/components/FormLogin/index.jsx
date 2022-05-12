import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import LinkForm from "../LinkForm";
import ControlForm from "../ControlForm";
import ButtonForm from "../ButtonForm";
import { ContainerForm, BoxForm } from "../ContainerForm";
import api from "./../../services/api";

function FormLogin() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().email("Email invalido.").required("Digite seu Email."),
    password: yup
      .string()
      .min(8, "Senha contem no mínimo 8 caracteres")
      .required("Digite sua senha."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    setLoading(true);
    api
      .post("/user/login", data)
      .then((res) => {
        setLoading(false);
        toast.success("Login efetuado com sucesso!", { theme: "dark" });
        localStorage.setItem("@Doit:Token", res.data.token);
        localStorage.setItem("@Doit:User", JSON.stringify(res.data.user));
        history.push("/dashboard");
      })
      .catch((_) => {
        toast.error("Email o senha errados. 😓", { theme: "dark" });
        setLoading(false);
      });
  };

  return (
    <ContainerForm title="Entre com sua conta">
      <BoxForm onSubmit={handleSubmit(formSubmit)}>
        <ControlForm
          ref="emailLogin"
          label="Email"
          id="email"
          {...register("email")}
          errors={errors}
        />
        <ControlForm
          ref="passwordLogin"
          label="Senha"
          id="password"
          type="password"
          {...register("password")}
          errors={errors}
        />

        <ButtonForm
          loading={loading}
          loadingText="Entrando..."
          isDirty={isDirty}
        >
          Entrar
        </ButtonForm>
      </BoxForm>
      <LinkForm
        title="Não possui uma conta?"
        pathText="Faça seu Cadastro."
        path={"/cadastrar"}
      />
    </ContainerForm>
  );
}

export default FormLogin;
