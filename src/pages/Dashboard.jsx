import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InputTask from "../components/InputTask";
import { ContainerContent } from "./../components/ContainerContent";
import Header from "../components/Header";
import ListTasks from "../components/ListTasks";
import api from "../services/api";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "Unknown" });
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("@Doit:Token");

  useEffect(() => {
    let getUser = JSON.parse(localStorage.getItem("@Doit:User"));
    setUser(getUser);
  }, []);

  const montageTasks = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((res) => {
        const apiTasks = res.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      });
  };

  useEffect(() => {
    montageTasks();
  }, []);

  return (
    <Flex
      boxSize="border-box"
      alignItems="center"
      flexDir="column"
      h="100%"
      w="100%"
      minH="100vh"
      bg="dark"
      flex="1"
    >
      <Header user={user} />

      <ContainerContent flex="1">
        <Grid
          boxSize="border-box"
          gridTemplateRows={["auto 1fr"]}
          w="100%"
          h="100%"
          alignItems="center"
          justifyItems="center"
          gap={[4, 8]}
          p={[
            "1rem 1rem 2rem 1rem",
            "1rem 1rem 2rem 1rem",
            "1rem 1rem 2rem 1rem",
            "2rem .5rem",
          ]}
        >
          <InputTask
            setTasks={setTasks}
            token={token}
            montageTasks={montageTasks}
          />
          <ListTasks tasks={tasks} montageTasks={montageTasks} token={token} />
        </Grid>
      </ContainerContent>
    </Flex>
  );
};

export default Dashboard;
