/* eslint-disable react/prop-types */

const style = {
  Pending: "text-warning",
  Rejected: "text-red-600",
  Offered: "text-success",
  Interviewed: "text-primary",
};

const Stats = ({ data }) => {
  const { totalApplications, query } = data;

  return (
    <div className="flex w-full justify-center items-center">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title ">Total Applications</div>
          <div className="stat-value">{totalApplications}</div>
        </div>

        {query.map((status) => {
          return (
            <div className="stat place-items-center" key={status._id}>
              <div className={`stat-title  ${style[status._id]}`}>
                {status._id}
              </div>
              <div className="stat-value">{status.nums || 0}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
