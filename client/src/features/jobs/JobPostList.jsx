/* eslint-disable react/prop-types */
import Loader from "../../ui/Loader";
import JobPostItem from "./JobPostItem";
const JobPostList = ({ jobPost, searchText, setSearchText, isLoading }) => {
  return (
    <div className="w-[90%] md:w-[60%] mt-[70px] ">
      <div className="flex justify-center p-3      ">
        <label className="input input-bordered w-[360px] flex items-center gap-2">
          <input
            type="text"
            className="grow border-stone-900 placeholder:text-stone-900"
            placeholder="Search for company or job title"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>{" "}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {jobPost.length > 0 ? (
            jobPost?.map((job) => {
              return <JobPostItem key={job._id} job={job} />;
            })
          ) : (
            <p>No Jobs Found</p>
          )}
        </>
      )}
    </div>
  );
};

export default JobPostList;
