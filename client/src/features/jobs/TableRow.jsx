/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HiEye } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { deleteJobById } from "../../services/apiJobs";

function TableRow({ job }) {
  const { _id: id, companyname, jobtitle, status, location, dateapplied } = job;

  const date = new Date(dateapplied);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const currDate = date.getDate();

  const [show, setShow] = useState(false);

  const applieddate = `${currDate}-${month}-${year}`;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteJobById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
  });

  return (
    <tr>
      <th>{companyname}</th>
      <td>{jobtitle}</td>
      <td>{status}</td>
      <td>{location}</td>
      <td>{applieddate}</td>
      <td className="flex relative">
        {show && (
          <div className="absolute flex flex-col gap-y-1 p-1 bg-slate-700 left-[-40px] top-0 z-20 ">
            <NavLink to={`/app/jobdetail/${id}`}>View</NavLink>
            <button onClick={() => mutate(id)}>Delete</button>
          </div>
        )}
        <button
          className="cursor-pointer"
          onClick={() => setShow((curr) => !curr)}
        >
          <HiEye />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
