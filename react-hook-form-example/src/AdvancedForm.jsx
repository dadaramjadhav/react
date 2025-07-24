import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const countryOptions = [
  { value: "india", label: "India" },
  { value: "india1", label: "India1" },
  { value: "india2", label: "India2" },
];
const skillOptions = [
  { value: "java1", label: "Java1" },
  { value: "java2", label: "Java2" },
  { value: "java3", label: "Java3" },
  { value: "java4", label: "Java4" },
];
const schema = yup.object({
  name: yup.string().required("name is required"),
  country: yup.object().required("country is required").nullable(),
  skills: yup.array().min(1, "select at least on skill"),
});

export const AdvancedForm = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: async (formData) => {
      const res = await axios.post("https://reqres.in/api/users", formData, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      return res.data;
    },
  });

  const submitForm = (data) => {
    const payload = {
      name: data.name,
      country: data.country?.value,
      skills: data.skills.map((s) => s.value),
    };
    mutate(payload);
  };
  return (
    <>
      <div>AdvancedForm</div>
      <form onSubmit={handleSubmit(submitForm)}>
        name: <input {...register("name")} />
        <br></br>
        country:
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={countryOptions}
              placeholder="select country"
            />
          )}
        />
        <br />
        skills:
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={skillOptions}
              placeholder="select skills"
              isMulti
            />
          )}
        />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
        {isSuccess && (
          <p style={{ color: "green" }}>
            ✅ Successfully submitted! User ID: {data?.id}
          </p>
        )}
        {isError && (
          <p style={{ color: "red" }}>
            ❌ Error: {error?.message || "Something went wrong"}
          </p>
        )}
      </form>
    </>
  );
};
