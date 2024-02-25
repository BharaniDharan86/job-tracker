/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HiEye } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { deleteJobById } from "../../services/apiJobs";
import { HiMiniTrash } from "react-icons/hi2";
import { HiEllipsisVertical } from "react-icons/hi2";

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
      <td className="hidden sm:table-cell">{status}</td>
      <td className="hidden sm:table-cell">{location}</td>
      <td className="hidden sm:table-cell">{applieddate}</td>
      <td className="flex relative">
        {show && (
          <div className="absolute flex flex-col gap-y-1 p-1 bg-slate-100 left-[-5px] top-0 z-20 ">
            <NavLink to={`/app/jobdetail/${id}`}>
              <HiEye />
            </NavLink>
            <button onClick={() => mutate(id)}>
              <HiMiniTrash />
            </button>
          </div>
        )}
        <button
          className="cursor-pointer"
          onClick={() => setShow((curr) => !curr)}
        >
          <span>
            <HiEllipsisVertical />
          </span>
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
