/* eslint-disable react/prop-types */
import { HiEye } from "react-icons/hi2";

function TableRow({ job }) {
  const { companyname, jobtitle, status, location, dateapplied } = job;

  const date = new Date(dateapplied);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const currDate = date.getDate();

  const applieddate = `${currDate}-${month}-${year}`;
  return (
    <tr>
      <th>{companyname}</th>
      <td>{jobtitle}</td>
      <td>{status}</td>
      <td>{location}</td>
      <td>{applieddate}</td>
      <td>
        <HiEye />
      </td>
    </tr>
  );
}

export default TableRow;
