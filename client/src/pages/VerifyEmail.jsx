import { useMutation } from "@tanstack/react-query";

import { Button } from "../ui/Button";
import { signUp } from "../services/apiAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (otp) => signUp(otp),
    onSuccess: () => {
      navigate("/app/myjobs");
    },
  });

  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function submit(data) {
    mutate(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Enter the 6 digit code"
          className="input w-full max-w-xs"
          {...register("otp", {
            required: "Please Provide The OTP You Received from your Email",
          })}
        />
        {errors?.otp && <p>{errors.otp.message}</p>}
        <Button disabled={isPending}>Submit</Button>
      </form>
    </div>
  );
};

export default VerifyEmail;
