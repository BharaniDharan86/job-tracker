import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";

export const JobForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  function submitForm(data) {
    console.log(data);
  }

  function errorOnSubmit() {
    console.log("There was an error");
  }

  console.log(errors);

  return (
    <div className="h-[600px] flex border-3 border-red-3 bg-slate-800 flex-col justify-center items-center uppercase w-[680px] font-semibold ">
      <h1 className="text-center text-2xl font-bold">Add a New Job Post</h1>
      <form
        className="w-full bg-slate-800 px-10 py-2"
        onSubmit={handleSubmit(submitForm, errorOnSubmit)}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Company Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("companyname", {
              required: "This field can't be empty",
            })}
          />
          {errors?.companyname?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.companyname.message}
            </p>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Job Title</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("jobtitle", {
              required: " This field can't be empty",
            })}
          />
          {errors?.jobtitle?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.jobtitle.message}
            </p>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("location", {
              required: "This field can't be empty",
            })}
          />
          {errors?.location?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.location.message}
            </p>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Salary</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("salary", {
              required: "This field can't be empty",
            })}
          />
          {errors?.salary?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.salary.message}
            </p>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Applied Platform</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("appliedplatform", {
              required: "This field can't be empty",
            })}
          />
          {errors?.appliedplatform?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.appliedplatform.message}
            </p>
          )}
        </label>

        <div className="mt-4  text-center py-2">
          <Button type="full">Submit</Button>
        </div>
      </form>
    </div>
  );
};
