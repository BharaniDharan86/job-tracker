/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewJob } from "../../services/apiPostedJob";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";

export const JobPostForm = () => {
  const [responsibilites, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [employmenttype, setEmploymenttype] = useState("Full Time");
  const [responsibilitesArr, setResponsibilitiesArr] = useState([]);
  const [requirementsArr, setRequirementsArr] = useState([]);
  const [cookies] = useCookies();

  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (jobDetail) => postNewJob(jobDetail, cookies.access_token),
    onSuccess: () => {
      toast.success("Job has been successfully posted");
      queryClient.invalidateQueries({
        queryKey: ["posted-job"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function addResponsibilitiesArr(value) {
    setResponsibilitiesArr((curr) => [...curr, value]);
    setResponsibilities("");
  }
  function addRequirementsArr(value) {
    setRequirementsArr((curr) => [...curr, value]);
    setRequirements("");
  }

  function submit(data) {
    const jobData = {
      ...data,
      requirements: requirementsArr,
      responsibilities: responsibilitesArr,
      type: employmenttype,
    };

    mutate(jobData);
  }

  return (
    <div className="h-[100%] flex  bg-slate-50 flex-col justify-center  items-center uppercase md:w-[680px] sm:w-[100%] font-semibold ">
      <h1>JobPostForm</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[400px] text-center mx-aut0"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Whom you're looking for ?</span>
          </div>
          <input
            type="text"
            placeholder="Job Title"
            className="input input-bordered w-full max-w-xs"
            {...register("title", {
              required: "this field is required",
            })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your company name?</span>
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="input input-bordered w-full max-w-xs"
            {...register("company", {
              required: "this field is required",
            })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Company Location</span>
          </div>
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs"
            {...register("location", {
              required: "this field is required",
            })}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Tell more about the role</span>
          </div>
          <input
            type="text"
            placeholder="Job description"
            className="input input-bordered w-full max-w-xs"
            {...register("description", {
              required: "this field is required",
            })}
          />
        </label>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                What you're looking from the Employee ?
              </span>
            </div>
            <input
              type="text"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Add one or more requirements"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addRequirementsArr(requirements);
              }}
            >
              add
            </button>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                What are the responsibilites of Employee ?
              </span>
            </div>
            <input
              placeholder="Add one or more responsibilites"
              className="input input-bordered w-full max-w-xs"
              value={responsibilites}
              onChange={(e) => setResponsibilities(e.target.value)}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addResponsibilitiesArr(responsibilites);
              }}
            >
              add
            </button>
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label mb-[-3px]">
            <span className="label-text">Employment Type</span>
          </div>
          <select
            className="select select-bordered text-lg"
            value={employmenttype}
            onChange={(e) => {
              console.log(e.target.value);
              setEmploymenttype(e.target.value);
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
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Salary Range</span>
          </div>
          <input
            type="text"
            placeholder="Salary"
            className="input input-bordered w-full max-w-xs"
            {...register("salary", {
              required: "this field is required",
            })}
          />
        </label>
        <button type="submit" className="bg-blue-500 p-2">
          Post
        </button>
      </form>
    </div>
  );
};
