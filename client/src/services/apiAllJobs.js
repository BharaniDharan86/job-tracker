export const getAllJobPost = async (token) => {
  const response = await fetch("http://localhost:3000/api/v1/jobinfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const getSingleJobPost = async (id, token) => {
  const response = await fetch(`http://localhost:3000/api/v1/jobinfo/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const applyJob = async (id, token) => {
  //{{url}}api/v1/apply/65d361301f02833fa42fbc62
  const response = await fetch(`http://localhost:3000/api/v1/apply/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};
