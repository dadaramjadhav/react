import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  username: yup
    .string()
    .required("username is required........")
    .min(3, "min length should be 3")
    .max(10, "max length should be 10"),
  password: yup
    .string()
    .required("password is required...........")
    .min(6, "min password length should be 6")
    .max(50, "max password length should be 50"),
  email: yup
    .string()
    .email()
    .required("email is required.........")
    .email("invalid email id.....")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
      "Email must be a valid email address (e.g., name@example.com)"
    ),
});

export const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        username: <input type="text" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
        <br />
        password: <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        Email: <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
