import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const ControlForm = ({ errors, label, id, ...props }, ref) => {
  return (
    <Box ref={ref}>
      <FormControl isInvalid={errors[id]}>
        <FormLabel htmlFor={id} fontSize="1xl" letterSpacing={1}>
          {label}
        </FormLabel>
        <Input
          id={id}
          focusBorderColor="orange.500"
          _hover={{ borderColor: "orange.500" }}
          {...props}
        />
        <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default React.forwardRef(ControlForm);
