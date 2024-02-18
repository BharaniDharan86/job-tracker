/* eslint-disable react/prop-types */
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export const JobTable = ({ jobs }) => {
  return (
    <div className="overflow-x-auto z-0 px-4">
      <table className="table  table-zebra ">
        <TableHead />
        <tbody className="tracking-wide capitalize py-4">
          {jobs.map((job) => {
            return <TableRow key={job._id} job={job} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
