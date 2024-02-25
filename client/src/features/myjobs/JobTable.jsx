/* eslint-disable react/prop-types */
import Loader from "../../ui/Loader";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export const JobTable = ({ jobs, isLoading }) => {
  return (
    <div className="overflow-x-auto  z-0 px-4">
      <table className="table table-zebra ">
        <TableHead />
        {isLoading ? (
          <div className="mb-[200px]">
            <Loader />
          </div>
        ) : (
          <>
            <tbody className="tracking-wide capitalize py-4">
              {jobs.map((job) => {
                return <TableRow key={job._id} job={job} />;
              })}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};
