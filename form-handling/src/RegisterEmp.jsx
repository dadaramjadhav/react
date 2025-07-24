import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
      "Invalid email pattern"
    ),
  position: yup.string().required("Position is required"),
});

// Async POST call
const addEmployee = async (data) => {
  const response = await axios.post("https://dummyjson.com/users/add", data);
  return response.data;
};

export default function RegisterEmp() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      reset();
      alert("Employee added successfully!");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-bold">Employee Registration</h2>

      <div>
        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full border p-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("position")}
          placeholder="Position"
          className="w-full border p-2"
        />
        {errors.position && (
          <p className="text-red-500 text-sm">{errors.position.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Saving..." : "Register"}
      </button>

      {mutation.isError && (
        <p className="text-red-500 text-sm">Error saving employee</p>
      )}
    </form>
  );
}
