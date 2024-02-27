import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../services/apiAuth";
import toast from "react-hot-toast";

export default function Signup() {
  const { register, formState, handleSubmit, getValues } = useForm();

  const { errors } = formState;
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (body) => verifyEmail(body),
    onSuccess: () => {
      navigate("/signup");
    },
    onError: (error) => {
      toast.error(error.message || "Something Went Wrong");
    },
  });

  function submit(data) {
    mutate(data);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h1 className="font-bold text-2xl p-3">Create Your Account</h1>
      <form className="w-[90%] sm:w-[45%]" onSubmit={handleSubmit(submit)}>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            {...register("username", {
              required: "This Field is Required",
            })}
          />
          {errors?.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email", {
              required: "This Field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide Valid Email",
              },
            })}
          />
          {errors?.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", {
              required: "This Field is Required",
              min: {
                value: 8,
                message: "Password sholud be atleast 8 characters",
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: "This Field is Required",
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
          />
          {errors?.confirmpassword && (
            <p className="text-red-600">{errors.confirmpassword.message}</p>
          )}
        </label>
        <button
          className="bg-blue-700 rounded-md w-full text-white px-1 py-2 font-semibold my-1"
          disabled={isPending}
        >
          Sign Up
        </button>
      </form>
      <div className="p-3 text-lg font-medium">
        <p>
          Already have an Account ?
          <NavLink to="/login" className="underline ml-1">
            Login Now
          </NavLink>
        </p>
      </div>
    </div>
  );
}
