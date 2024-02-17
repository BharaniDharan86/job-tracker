import { JobHeader } from "../features/jobs/JobHeader";
import { JobTable } from "../features/jobs/JobTable";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/apiJobs";
import Loader from "../ui/Loader";
export const Jobs = () => {
  const [cookies] = useCookies();

  const { isLoading, data } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getAllJobs(cookies.access_token),
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <JobHeader />
      <JobTable jobs={data?.jobs} />
    </div>
  );
};
