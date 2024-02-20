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
