export const getAllJobPost = async (token, searchText) => {
  console.log(searchText);
  const response = await fetch(
    `http://localhost:3000/api/v1/jobinfo?searchTerm=${searchText}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
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
  console.log(id);
  //{{url}}api/v1/apply/65d361301f02833fa42fbc62
  const yoe = {
    yearsOfExperience: 2,
  };
  const response = await fetch(`http://localhost:3000/api/v1/apply/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(yoe),
  });

  const data = await response.json();

  return data;
};
