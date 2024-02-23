export async function getAllJobs(token, filter, sortBy) {
  const sortValue =
    sortBy.split("-")[1] === "asc" ? "dateapplied" : "-dateapplied";
  const response = await fetch(
    `http://localhost:3000/api/v1/jobs?filter=${filter}&sort=${sortValue}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
 
  return data;
}

export async function createJob(jobs, token) {
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

export async function getJobById(id, token) {
  const response = await fetch(`http://localhost:3000/api/v1/jobs/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}

export async function changeJobStatus(id, status, token) {
  const response = await fetch(`http://localhost:3000/api/v1/jobs/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(status),
  });

  const data = await response.json();

  return data;
}

export async function getJobStats(token) {
  const response = await fetch(`http://localhost:3000/api/v1/jobs/stats`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}

export async function deleteJobById(id, token) {
  const response = await fetch(`http://localhost:3000/api/v1/jobs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
}
