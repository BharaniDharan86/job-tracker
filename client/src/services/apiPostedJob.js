export default async function getMyPostedJobs(token) {


  const response = await fetch("http://localhost:3000/api/v1/jobinfo/myjobs", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data.jobsByUser;
}

export async function postNewJob(jobDetails, token) {
  const response = await fetch("http://localhost:3000/api/v1/jobinfo", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobDetails),
  });

  const data = await response.json();
  

  if (data.status === "failed") throw new Error(data.message);

  return data;
}
