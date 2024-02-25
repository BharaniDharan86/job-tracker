import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../services/apiJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { Button } from "../ui/Button";
import Select from "../ui/Select";
import { toReadableDate } from "../utils/toDate";
export const JobDetail = () => {
  const { id } = useParams();
  const [cookies] = useCookies();
  const navigate = useNavigate();

  // make an api call and get the data
  const { data, isLoading } = useQuery({
    queryKey: ["job-detail", id],
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

  const redableDate = toReadableDate(dateapplied);

  const bg = {
    Pending: "bg-yellow-500",
    Rejected: "bg-red-500",
    Offered: "bg-green-500",
    Interviewed: "bg-blue-500",
  };

  return (
    <div className="md:px-8 my-2 mx-auto w-[90%] px-2 py-4 text-stone-800 relative mt-[60px] ">
      <div className="flex justify-between items-center">
        <div className="p-2">
          <h1 className="font-bold text-2xl m-0 mb-[-5px] uppercase ">
            {companyname}
          </h1>

          <div className="flex items-center gap-2 py-1">
            <h2 className=" text-lg m-0 capitalize text-stone-700 font-semibold">
              {jobtitle}{" "}
            </h2>
            <h2 className="text-sm">{location}</h2>
            <p>{redableDate}</p>
          </div>
          <div className="text-xl font-semibold">
            <p className="font-medium text-sm ">{salary}</p>
            <div className="py-3">
              <span
                className={`${bg[status]} md:px-4 md:py-2 px-2 py-1  text-sm font-medium `}
              >
                {status}
              </span>
            </div>
          </div>
          <Select id={id} value={status} />
        </div>
      </div>

      <div className=" flex  justify-end">
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
};
