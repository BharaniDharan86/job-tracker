export default async function getApplicants(jobId, token) {
  console.log(jobId);
  const response = await fetch(`http://localhost:3000/api/v1/apply/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data.applicants;
}
