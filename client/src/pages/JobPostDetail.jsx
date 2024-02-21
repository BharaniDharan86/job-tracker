/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { applyJob, getSingleJobPost } from "../services/apiAllJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { PiMapPinBold } from "react-icons/pi";
import useUser from "../hooks/useUser";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import { HiMiniUser } from "react-icons/hi2";
import toast from "react-hot-toast";

export const JobPostDetail = () => {
  const { id } = useParams();
  const [cookies] = useCookies();

  const { data, isLoading } = useQuery({
    queryKey: ["jobpostdetails", id],
    queryFn: () => getSingleJobPost(id, cookies.access_token),
  });

  const { userData, isUserLoading } = useUser(cookies.access_token);

  const { mutate } = useMutation({
    mutationFn: () => applyJob(id, cookies.access_token),
    onSuccess: () => {
      toast.success("Applied Successfully ");
    },
  });

  if (isLoading || isUserLoading) return <Loader />;

  const {
    _id,
    company,
    description,
    location,
    requirements,
    responsibilities,
    salary,
    title,
    type,
    postedBy,
    createdAt,
  } = data.job;

  const isApplied = userData.jobapplication.includes(id);

  return (
    <div className="flex justify-center items-center w-full text-white h-full">
      <div className="w-[900px] bg-slate-800 px-8 py-9 h-[80vh] overflow-y-scroll">
        <header className="text-white px-2 py-2">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <h1 className="text-2xl   text-white">{company}</h1>
          <div className="flex gap-2  py-[0.7px] items-center">
            <PiMapPinBold />
            <h2 className="text-sm ">{location}</h2>
          </div>
          <div className="flex items-center gap-2  py-[0.7px]">
            <PiBriefcaseLight />
            <span className="text-sm">{type}</span>
          </div>
          <div className="flex items-center gap-2  py-[0.7px]">
            <PiMoney />
            <span className="text-sm">{salary}</span>
          </div>
          <div className="flex items-center gap-2  py-[0.7px]">
            <HiMiniUser />
            <span className="text-sm">{postedBy.username}</span>
          </div>
          <div></div>
        </header>
        <main>
          <div className="py-2">
            <h2 className="text-xl text-white font-bold">Job Description</h2>
            <p className="text-sm">{description}</p>
          </div>
          <div className="py-2">
            <h2 className="text-xl text-white font-bold">
              Your Responsibilities
            </h2>{" "}
            <ul className="list-disc pl-4 text-sm">
              {responsibilities.map((el, ind) => {
                return <li key={ind}>{el}</li>;
              })}
            </ul>
          </div>
          <div className="py-2">
            <h2 className="text-xl text-white font-bold">Requirements</h2>{" "}
            <ul className="list-disc pl-4 text-sm">
              {requirements.map((el, ind) => {
                return <li key={ind}>{el}</li>;
              })}
            </ul>
          </div>
        </main>
        <div className="py-3">
          <button
            onClick={mutate}
            disabled={isApplied}
            className="btn btn-wide cursor-pointer  disabled:cursor-not-allowed disabled:bg-blue-300  bg-[#1e40af]  px-4 py-2 text-slate-100  hover:bg-[#1d4ed8] transition-all"
          >
            {isApplied ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};
