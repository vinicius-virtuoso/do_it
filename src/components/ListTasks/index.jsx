import { Flex, Heading } from "@chakra-ui/react";
import Card from "../Card";

const ListTasks = ({ tasks, montageTasks, token }) => {
  return (
    <Flex
      boxSize="border-box"
      as="ul"
      width="100%"
      h={tasks.length > 0 ? "auto" : "100%"}
      flex="1"
      border="1px solid"
      borderColor="gray.900"
      overflowY={tasks.length > 0 ? "auto" : "hidden"}
      alignItems={tasks.length > 0 ? "center" : "flex-start"}
      rounded="md"
      flexWrap="wrap"
      gap={6}
    >
      {tasks.length > 0 ? (
        <>
          {tasks.map((task, index) => (
            <Card
              key={task._id ? task._id : index}
              _id={task._id}
              title={task.description}
              date={task.createdAt}
              montageTasks={montageTasks}
              token={token}
            />
          ))}
        </>
      ) : (
        <>
          <Heading p={(8, 10)} fontSize="2xl" textAlign="center" w="100%">
            Nada por enquanto...
          </Heading>
        </>
      )}
    </Flex>
  );
};
export default ListTasks;
