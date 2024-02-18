/* eslint-disable react/prop-types */
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { changeJobStatus } from "../services/apiJobs";
import { useCookies } from "react-cookie";

const Select = ({ id, value }) => {
  const [status, setStatus] = useState(value);
  const [cookies] = useCookies();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (val) =>
      changeJobStatus(id, { status: val }, cookies.access_token),
    onSuccess: (data) => {
      console.log("succedd", data);
      queryClient.invalidateQueries({
        queryKey: ["job-detail"],
      });
    },
  });

  function onSelectChange(val) {
    setStatus(val);
    mutate(val);
  }

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={status}
      onChange={(e) => onSelectChange(e.target.value)}
    >
      <option disabled selected>
        Change the status
      </option>
      <option>Pending</option>
      <option>Offered</option>
      <option>Rejected</option>
      <option>Interviewed</option>
    </select>
  );
};

export default Select;
