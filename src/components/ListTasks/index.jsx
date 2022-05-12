import { Flex } from "@chakra-ui/react";
import Card from "../Card";

const ListTasks = ({ tasks, montageTasks, token }) => {
  return (
    <Flex
      boxSize="border-box"
      as="ul"
      width="100%"
      flex="1"
      h="auto"
      border="1px solid"
      borderColor="gray.900"
      overflowY="auto"
      rounded="md"
      flexWrap="wrap"
      gap={6}
    >
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
    </Flex>
  );
};
export default ListTasks;
