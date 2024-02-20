import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { applyJob, getSingleJobPost } from "../services/apiAllJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { Button } from "../ui/Button";
import useUser from "../hooks/useUser";
export const JobPostDetail = () => {
  const { id } = useParams();
  const [cookies] = useCookies();

  const { data, isLoading } = useQuery({
    queryKey: ["jobpostdetails", id],
    queryFn: () => getSingleJobPost(id, cookies.access_token),
  });

  const { userData, isUserLoading } = useUser(cookies.access_token);

  const { mutate } = useMutation({
    mutationFn: (id) => applyJob(id, cookies.access_token),
    onSuccess: () => {
      alert("You Have Successfully Applied For This Job");
    },
  });

  if (isLoading || isUserLoading) return <Loader />;

  const { company } = data.job;
  console.log(userData);

  const isApplied = userData.jobapplication.includes(id);
  console.log(isApplied);

  return (
    <div>
      {company}

      <Button onClick={() => mutate(id)}>Apply</Button>
    </div>
  );
};
