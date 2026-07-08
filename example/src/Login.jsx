import React from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import { Debounce } from "./Debounce"
import { checkUsername } from "./api"
import { useAuth } from "./useAuth"

const Login = () => {
  const { login, logout, isAuthenticated, user } = useAuth()
  //react-hook-forms
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValidating },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      role: "",
      adminCode: "",
      skills: [{ name: "", experience: "" }],
    },
  })
  const role = watch("role")

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  })

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleUserLogin = () => {
    login({ role: "USER" })
    navigate(from, { replace: true }) // redirect to the page user was trying to access
  }

  const handleAdminLogin = () => {
    login({ role: "ADMIN" })
    navigate(from, { replace: true }) // redirect to the page user was trying to access
  }

  const handleOtherLogin = () => {
    login({ role: "OTHER" })
    navigate(from, { replace: true }) // redirect to the page user was trying to access
  }
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleAdminLogin} className="py-2 px-4 bg-blue-500 text-white rounded">
        Admin Login
      </button>
      <button onClick={handleUserLogin} className="py-2 px-4 bg-green-500 text-white rounded">
        User Login
      </button>
      <button onClick={handleOtherLogin} className="py-2 px-4 bg-purple-500 text-white rounded">
        Other Login
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        Username:{" "}
        <input
          {...register("email", {
            required: "email required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          placeholder="Username"
        />
        <p>{errors.email?.message}</p>
        <br />
        Password:{" "}
        <input
          type="password"
          {...register("password", { required: "password is mandatory" })}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
