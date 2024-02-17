export async function getAllJobs(token) {
  const response = await fetch("http://localhost:3000/api/v1/jobs", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}

export async function createJob(jobs, token) {
  console.log(jobs);
  const response = await fetch("http://localhost:3000/api/v1/jobs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobs),
  });

  const data = await response.json();

  return data;
}
