import { useQuery } from "@tanstack/react-query";
import Stats from "../features/dashboard/Stats";
import StatusChart from "../features/dashboard/StatusChart";
import { useCookies } from "react-cookie";
import { getJobStats } from "../services/apiJobs";
import Loader from "../ui/Loader";

export const Dashboard = () => {
  const [cookie] = useCookies();
  const { isLoading, data } = useQuery({
    queryKey: ["stats"],
    queryFn: () => getJobStats(cookie.access_token),
  });

  return (
    <div className="px-8 py-4 text-slate-200 relative">
      <h1 className="font-bold text-[40px] m-0 mb-[-5px] uppercase">
        DashBoard
      </h1>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Stats data={data} />
          <div>
            <StatusChart data={data} />
          </div>
        </>
      )}
    </div>
  );
};
