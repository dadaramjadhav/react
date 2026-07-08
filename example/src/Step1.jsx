import { useFormContext } from "react-hook-form"

export default function Step1({ onNext }) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext()

  const next = async () => {
    const valid = await trigger(["firstName", "lastName"])
    if (valid) onNext()
  }

  return (
    <>
      <h3>Step 1: Personal Info</h3>

      <input
        htmlFor="firstName"
        placeholder="First Name"
        autoComplete="firstName"
        {...register("firstName", { required: "Required" })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        htmlFor="lastName"
        placeholder="Last Name"
        autoComplete="lastName"
        {...register("lastName", { required: "Required" })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <button type="button" onClick={next}>
        Next
      </button>
    </>
  )
}
