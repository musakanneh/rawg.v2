import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <h1>Logo</h1>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
