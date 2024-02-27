import { useQuery } from "@tanstack/react-query";
import { getAllJobPost } from "../../services/apiAllJobs";
import { useCookies } from "react-cookie";
import Loader from "../../ui/Loader";
import JobPostList from "./JobPostList";
import { useState } from "react";

const JobPost = () => {
  const [cookies] = useCookies();
  const token = cookies.access_token;
  const [searchText, setSearchText] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["alljobs", searchText],
    queryFn: () => getAllJobPost(token, searchText),
  });

  const jobPost = data?.allJobs;
  return (
    <div className="flex justify-center items-center ">
      <JobPostList
        jobPost={jobPost}
        searchText={searchText}
        setSearchText={setSearchText}
        isLoading={isLoading}
      />
    </div>
  );
};

export default JobPost;
