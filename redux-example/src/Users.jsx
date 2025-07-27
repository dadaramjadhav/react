import { useDispatch, useSelector } from "react-redux";
import { addUsers, deleteUser } from "./UserSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
export const Users = () => {
  const [name, setName] = useState("");
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };
  const handleAddUser = () => {
    dispatch(addUsers({ id: nanoid(), name }));
  };
  return (
    <>
      <div>Users</div>
      Add User:
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <br />
      <button onClick={handleAddUser}>add user</button>
      <hr />
      {users.map((user) => (
        <li key={user.id}>
          {user.id}...{user.name} .{" "}
          <button onClick={() => handleDeleteUser(user.id)}>delete</button>
        </li>
      ))}
    </>
  );
};
