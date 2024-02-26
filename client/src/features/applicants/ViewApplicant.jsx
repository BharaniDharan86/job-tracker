/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import getApplicants from "../../services/apiApplicants";
import { useCookies } from "react-cookie";
import Loader from "../../ui/Loader";
import ApplicantList from "./ApplicantList";

export default function ViewApplicant({ jobId }) {
  const [cookie] = useCookies();
  const token = cookie.access_token;
  const { isLoading, data } = useQuery({
    queryKey: ["view-applicant", jobId],
    queryFn: () => getApplicants(jobId, token),
  });

  if (isLoading) return <Loader />;

  if (data.length === 0) return <p>No Application yet</p>;
  return (
    <div>
      <ApplicantList applicant={data} />
    </div>
  );
}
