import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchUsers = async () => {
  const responce = await axios.get("https://reqres.in/api/users", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });
  return responce.data.data;
};
export const GetUser = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryFn: fetchUsers,
    queryKey: ["users"],
  });
  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <>
      <h1>user list</h1>
      <button onClick={() => refetch()}>refresh</button>
      {users.map((user) => (
        <li key={user.id}>
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ width: 50, borderRadius: "50%", marginRight: 10 }}
          />
          {user.first_name} {user.last_name} ({user.email})
        </li>
      ))}
    </>
  );
};
