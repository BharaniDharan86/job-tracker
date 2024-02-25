/* eslint-disable react/prop-types */
import JobPostItem from "./JobPostItem";
const JobPostList = ({ jobPost }) => {
  return (
    <div className="w-[90%] md:w-[60%] mt-[70px] ">
      {jobPost.map((job) => {
        return <JobPostItem key={job._id} job={job} />;
      })}
    </div>
  );
};

export default JobPostList;
