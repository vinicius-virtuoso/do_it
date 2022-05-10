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

        <ButtonForm loading={loading} isDirty={isDirty}>
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
