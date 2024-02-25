import { useQuery } from "@tanstack/react-query";
import { getAllJobPost } from "../../services/apiAllJobs";
import { useCookies } from "react-cookie";
import Loader from "../../ui/Loader";
import JobPostList from "./JobPostList";

const JobPost = () => {
  const [cookies] = useCookies();
  const token = cookies.access_token;
  const { data, isLoading } = useQuery({
    queryKey: ["alljobs"],
    queryFn: () => getAllJobPost(token),
  });

  if (isLoading) return <Loader />;

  const jobPost = data.allJobs;
  return (
    <div className="flex justify-center items-center ">
      <JobPostList jobPost={jobPost} />
    </div>
  );
};

export default JobPost;
