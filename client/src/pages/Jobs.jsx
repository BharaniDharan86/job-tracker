import { JobHeader } from "../features/myjobs/JobHeader";
import { JobTable } from "../features/myjobs/JobTable";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../services/apiJobs";
import { useState } from "react";
import Loader from "../ui/Loader";
export const Jobs = () => {
  const [cookies] = useCookies();
  const [filter, setFilter] = useState("All");

  const [sortBy, setSortBy] = useState("date-asc");

  const { isLoading, data } = useQuery({
    queryKey: ["jobs", filter, sortBy],
    queryFn: () => getAllJobs(cookies.access_token, filter, sortBy),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="mt-[60px]">
      <JobHeader
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <JobTable jobs={data?.jobs} isLoading={isLoading} />
    </div>
  );
};
