import { useState } from "react";
import { Button } from "../../ui/Button";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "react-datepicker/dist/react-datepicker.css";
import { createJob } from "../../services/apiJobs";
import { useCookies } from "react-cookie";

export const JobForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const [employmenttype, setEmploymentType] = useState("Full Time");
  const { errors } = formState;
  const [cookies] = useCookies();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (jobs) => createJob(jobs, cookies.access_token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });

  function submitForm(data) {
    const jobData = { ...data, dateapplied: startDate, employmenttype };
    mutate(jobData);
  }

  return (
    <div className="h-[100%] flex border-3 border-red-3 bg-slate-50 flex-col justify-center items-center uppercase md:w-[680px] sm:w-[100%] font-semibold ">
      <h1 className="text-center text-2xl font-bold">Add a New Job Post</h1>
      <form
        className="w-[100%]  bg-slate-50 md:px-10 px-10"
        onSubmit={handleSubmit(submitForm)}
      >
        <label className="form-control w-full">
          <div className="label mb-[-3px]">
            <span className="label-text">Company Name</span>
          </div>
          <input
            type="text"
            className="input input-bordered input-sm w-full "
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
          <div className="label mb-[-3px]">
            <span className="label-text">Job Title</span>
          </div>
          <input
            type="text"
            className="input input-sm input-bordered w-full "
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
          <div className="label mb-[-3px]">
            <span className="label-text">Date Applied</span>
          </div>
          <DatePicker
            className="input input-sm input-bordered w-full "
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          {errors?.jobtitle?.message && (
            <p className="font-semibold capitalize text-red-600">
              {errors.jobtitle.message}
            </p>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label mb-[-3px]">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            className="input input-sm input-bordered w-full "
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
          <div className="label mb-[-3px]">
            <span className="label-text">Employment Type</span>
          </div>
          <select
            className="select select-sm select-bordered text-sm"
            value={employmenttype}
            onChange={(e) => {
              console.log(e.target.value);
              setEmploymentType(e.target.value);
            }}
          >
            <option disabled>Pick one</option>
            <option selected>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
            <option>Freelance</option>
          </select>
        </label>
        <label className="form-control w-full ">
          <div className="label mb-[-3px]">
            <span className="label-text">Salary</span>
          </div>
          <input
            type="text"
            className="input input-sm input-bordered w-full "
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
          <div className="label mb-[-3px]">
            <span className="label-text">Applied Platform</span>
          </div>
          <input
            type="text"
            className="input input-sm input-bordered w-full "
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
