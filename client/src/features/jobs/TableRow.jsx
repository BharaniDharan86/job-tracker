/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiEye } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function TableRow({ job }) {
  const { _id: id, companyname, jobtitle, status, location, dateapplied } = job;

  const date = new Date(dateapplied);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const currDate = date.getDate();

  const [show, setShow] = useState(false);

  const applieddate = `${currDate}-${month}-${year}`;
  return (
    <tr>
      <th>{companyname}</th>
      <td>{jobtitle}</td>
      <td>{status}</td>
      <td>{location}</td>
      <td>{applieddate}</td>
      <td className="flex relative">
        {show && (
          <div className="absolute left-[-40px] top-0 z-20 ">
            <NavLink to={`/app/jobdetail/${id}`}>View</NavLink>
            <p>Delete</p>
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
