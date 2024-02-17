import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../services/apiJobs";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";

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

  console.log(data);

  // render on page
  const {
    companyname,
    jobtitle,
    status,
    location,
    dateapplied,
    salary,
    appliedplatform,
    employmenttype,
  } = data.job;

  return (
    <div>
      <h1>{companyname}</h1>

      <h2>{jobtitle} </h2>

      <p>{location}</p>

      <label htmlFor="">Job Description</label>

      <button onClick={() => naviget(-1)}>Back</button>
    </div>
  );
};
