/* eslint-disable react/prop-types */
export default function ApplicantList({ applicant }) {
  console.log(applicant);

  if (!applicant) return <p>No Application Yet</p>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Year of experience</th>
            </tr>
          </thead>
          <tbody>
            {applicant.map((application) => {
              return (
                <tr key={application._id}>
                  <td>{application.user.username}</td>
                  <td>{application.user.email}</td>
                  <td>{application.yearsOfExperience}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
