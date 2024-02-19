import { JobHeader } from "../features/jobs/JobHeader";
import { JobTable } from "../features/jobs/JobTable";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/apiJobs";
import Loader from "../ui/Loader";
import { useState } from "react";
export const Jobs = () => {
  const [cookies] = useCookies();
  const [filter, setFilter] = useState("All");

  const [sortBy, setSortBy] = useState("date-asc");

  console.log(filter);

  const { isLoading, data } = useQuery({
    queryKey: ["jobs", filter, sortBy],
    queryFn: () => getAllJobs(cookies.access_token, filter, sortBy),
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <JobHeader
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <JobTable jobs={data?.jobs} />
    </div>
  );
};
