import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const MyButton = ({
  primary,
  secondary,
  children,
  path,
  onClick,
  minWidth,
  maxWidth,
  py,
  px,
}) => {
  const history = useHistory();

  if (primary) {
    return (
      <Button
        onClick={onClick ? onClick : () => history.push(path)}
        minWidth={minWidth ? minWidth : [120, 190, 200]}
        maxWidth={maxWidth ? maxWidth : [120, 190, 200]}
        colorScheme="orange"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        color="white"
        border="2px solid transparent"
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
      >
        {children}
      </Button>
    );
  } else if (secondary) {
    return (
      <Button
        onClick={onClick ? onClick : () => history.push(path)}
        minWidth={minWidth ? minWidth : [120, 190, 200]}
        maxWidth={maxWidth ? maxWidth : [120, 190, 200]}
        colorScheme="orange"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        color="orange.500"
        borderWidth={2}
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
        variant="outline"
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={onClick ? onClick : () => history.push(path)}
        minWidth={minWidth ? minWidth : [120, 190, 200]}
        maxWidth={maxWidth ? maxWidth : [120, 190, 200]}
        colorScheme="orange"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        color="white"
        border="2px solid transparent"
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
      >
        {children}
      </Button>
    );
  }
};
