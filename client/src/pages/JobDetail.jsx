import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../services/apiJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { Button } from "../ui/Button";
export const JobDetail = () => {
  const { id } = useParams();
  const [cookies] = useCookies();
  const naviget = useNavigate();

  console.log(id, cookies.access_token);
  // make an api call and get the data
  const { data, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getJobById(id, cookies.access_token),
  });

  if (isLoading) return <Loader />;

  // render on page
  const {
    companyname,
    jobtitle,
    status,
    location,
    dateapplied,
    salary,
    appliedplatform,
    notes = "",
    employmenttype,
  } = data.job;

  const bg = {
    Pending: "bg-yellow-500",
    Rejected: "bg-red-600",
    Offered: "bg-green-600",
    Interviewed: "bg-blue-600",
  };

  return (
    <div className="px-8 py-4 text-slate-200 relative ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[40px] m-0 mb-[-5px] uppercase">
            {companyname}
          </h1>

          <h2 className="font-bold text-[28px] m-0 capitalize">{jobtitle} </h2>

          <span className={`${bg[status]} px-4 py-2 text-lg font-semibold`}>
            {status}
          </span>
        </div>
        <div className="text-xl font-semibold">
          <h2 className="mb-4">{location}</h2>
          <h2>{dateapplied}</h2>
          <span className="font-medium text-lg ">{salary}</span>
        </div>
      </div>

      {/* <div className="">
        <Button onClick={() => naviget(-1)}>Back</Button>
      </div> */}
    </div>
  );
};
