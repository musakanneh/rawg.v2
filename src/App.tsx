import { Button } from "@chakra-ui/react";
import { AddUser } from "./components/add-user";
import { ViewUser } from "./components/view-user";

function App() {
  return (
    <>
      <h1>React CRUD app</h1>
      <AddUser input="Mussa" />
      {/* <Button colorScheme="blue">Button</Button> */}
      <ViewUser />
    </>
  );
}

export default App;
