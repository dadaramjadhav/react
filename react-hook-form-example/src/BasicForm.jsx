import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup.string().required(),
  city: yup.string().required(),
  acceptTerms: yup.boolean().oneOf([true], "select terms and conditions.."),
});

export default function BasicForm() {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      username: <input {...register("username", { required: true })}></input>
      <div>{errors.username && <p>username required</p>}</div>
      <br></br>
      city:
      <select {...register("city")}>
        <option value="">---select--- </option>
        <option value="pune">pune</option>
        <option value="mumbai">mumbai</option>
      </select>
      <div>{errors.city && <div>select city</div>}</div>
      <br />
      Terms:{" "}
      <input
        type="checkbox"
        {...register("acceptTerms", { required: true })}
      ></input>
      <div>{errors.acceptTerms && <div>accept terms and conditions</div>}</div>
      <button type="submit">Submit</button>
    </form>
  );
}
