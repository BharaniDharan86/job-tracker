/* eslint-disable react/prop-types */
import React from "react";
import JobPostItem from "./JobPostItem";
const JobPostList = ({ jobPost }) => {
  return (
    <div className="w-[800px]">
      {jobPost.map((job) => {
        return <JobPostItem key={job._id} job={job} />;
      })}
    </div>
  );
};

export default JobPostList;
