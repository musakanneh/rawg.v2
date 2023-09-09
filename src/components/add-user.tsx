import { useState } from "react";
import classes from "./add-user.module.scss";

/**
 * Hooks
 */

interface CreateUserProps {
  input: any;
}

export const AddUser = (input: CreateUserProps) => {
  const [user, setUser] = useState("");

  const addUserBtn = () => {
    setUser(user);
  };

  return (
    <div className={classes.createUser}>
      <h1>Add users</h1>
      <input
        onChange={(event) => setUser(event.target.value)}
        type="text"
        name=""
        id=""
      />
      <br />
      <button onClick={addUserBtn}>Add users</button>
    </div>
  );
};
