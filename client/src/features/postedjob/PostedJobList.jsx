import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import getMyPostedJobs from "../../services/apiPostedJob";
import Loader from "../../ui/Loader";
import PostedJobItem from "./PostedJobItem";

const PostedJobList = () => {
  const [cookies] = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ["posted-job"],
    queryFn: () => getMyPostedJobs(cookies.access_token),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="grid  place-items-center w-full md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] my-[20px] mx-auto  grid-cols-[1fr] gap-y-10 place-self-center">
      {data.map((job) => {
        return <PostedJobItem key={job._id} job={job} />;
      })}
    </div>
  );
};

export default PostedJobList;
