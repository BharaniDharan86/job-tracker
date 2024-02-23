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
  console.log(data);
  return (
    <div className="grid  place-items-center w-full grid-cols-[1fr_1fr_1fr] gap-y-10 place-self-center">
      {data.map((job) => {
        return <PostedJobItem key={job._id} job={job} />;
      })}
    </div>
  );
};

export default PostedJobList;
