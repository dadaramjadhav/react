import { useFormContext } from "react-hook-form"

export default function Step2({ onNext, onBack }) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext()

  const next = async () => {
    const valid = await trigger(["email", "password"])
    if (valid) onNext()
  }

  return (
    <>
      <h3>Step 2: Account Info</h3>

      <input
        placeholder="Email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Required",
          minLength: { value: 6, message: "Min 6 chars" },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={next}>
        Next
      </button>
    </>
  )
}
