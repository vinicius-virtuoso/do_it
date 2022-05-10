import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinkForm = ({ path, pathText, title, ...props }) => {
  return (
    <Text
      textAlign="center"
      mt={2}
      d="flex"
      gap={2}
      w="100%"
      justifyContent="center"
    >
      {title}
      <Box as={Link} to={path} color="orange.500">
        {pathText}
      </Box>
    </Text>
  );
};

export default LinkForm;
