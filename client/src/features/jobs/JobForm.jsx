import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";

export const JobForm = () => {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <div className="h-[700px] flex border-3 border-red-3 bg-slate-800 flex-col justify-center items-center uppercase w-[680px] font-semibold ">
      <h1 className="text-center">Add a New Job Post</h1>
      <form
        className="w-full bg-slate-800 p-10"
        onSubmit={handleSubmit(submit)}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Company Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("companyname")}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Job Title</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("jobtitle")}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("location")}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Salary</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("salary")}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Applied Platform</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("appliedplatform")}
          />
        </label>
        <div className="mt-4  text-center py-2">
          <Button type="full">Submit</Button>
        </div>
      </form>
    </div>
  );
};
