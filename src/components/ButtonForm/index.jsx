import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonForm = ({ loading, isDirty, children }, ref) => {
  return (
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
      {children}
    </Button>
  );
};

export default React.forwardRef(ButtonForm);
