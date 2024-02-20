import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSingleJobPost } from "../services/apiAllJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { Button } from "../ui/Button";
export const JobPostDetail = () => {
  const { id } = useParams();
  const [cookies] = useCookies();

  const { data, isLoading } = useQuery({
    queryKey: ["jobpostdetails", id],
    queryFn: () => getSingleJobPost(id, cookies.access_token),
  });

  if (isLoading) return <Loader />;

  const { company } = data.job;

  useMutation({});

  return (
    <div>
      {company}

      <Button>Apply</Button>
    </div>
  );
};
