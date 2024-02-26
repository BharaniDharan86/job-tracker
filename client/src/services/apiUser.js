export default async function getUser(token) {
  const res = await fetch("http://localhost:3000/api/v1/users/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data.userDetail;
}

export async function updateUsername(username, token) {
  console.log(username);
  const response = await fetch("http://localhost:3000/api/v1/users/updateme", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
    }),
  });

  const data = await response.json();

  console.log(data);

  return data;
}
export async function updatePassword(userPass, token) {
  const response = await fetch(
    "http://localhost:3000/api/v1/users/updatePassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userPass),
    }
  );

  const data = await response.json();

  console.log(data);

  return data;
}
