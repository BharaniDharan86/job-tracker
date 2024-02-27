import { useMutation } from "@tanstack/react-query";

import { Button } from "../ui/Button";
import { signUp } from "../services/apiAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (otp) => signUp(otp),
    onSuccess: () => {
      navigate("/app/myjobs");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function submit(data) {
    mutate(data);
  }

  return (
    <div className="flex justify-center items-center h-[90vh] flex-col">
      <p className="mb-3 text-xl md:text-3xl font-semibold text-center">
        Please check your email for the 6-digit verification code and enter it
        below
      </p>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          placeholder="Enter the 6 digit code"
          className="input w-full input-bordered max-w-xs"
          {...register("otp", {
            required: "Please Provide The OTP You Received from your Email",
          })}
        />
        {errors?.otp && <p>{errors.otp.message}</p>}
        <Button disabled={isPending} type="small">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default VerifyEmail;
