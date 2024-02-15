import { HiEye } from "react-icons/hi2";

export const JobTable = () => {
  return (
    <div className="overflow-x-auto z-0 px-4">
      <table className="table z-[-10] table-zebra ">
        {/* head */}
        <thead className="bg-[#1e293b] uppercase text-slate-200 py-2 text-sm">
          <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Location</th>
            <th>Date Applied</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tracking-wide capitalize py-4">
          {/* row 1 */}
          <tr>
            <th>Tata consultanct services</th>
            <td>full stack developer</td>
            <td>pending</td>
            <td>chennai</td>
            <td>15-02-2024</td>
            <td>
              <HiEye />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Tata consultanct services</th>
            <td>full stack developer</td>
            <td>pending</td>
            <td>chennai</td>
            <td>15-02-2024</td>
            <td>
              <HiEye />
            </td>
          </tr>
          <tr>
            <th>Tata consultanct services</th>
            <td>full stack developer</td>
            <td>pending</td>
            <td>chennai</td>
            <td>15-02-2024</td>
            <td>
              <HiEye />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
