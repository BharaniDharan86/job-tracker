export const verifyEmail = async function (body) {
  const response = await fetch(
    "http://localhost:3000/api/v1/users/verifyemail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    }
  );

  const data = await response.json();

  if (data.status === "Failed") throw new Error(data.message);

  return data;
};

export const signUp = async function (otp) {
  const response = await fetch("http://localhost:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(otp),
    credentials: "include",
  });

  const data = await response.json();

  if (data.status === "Failed") throw new Error(data.message);

  return data;
};

export const login = async function (userData) {
  console.log(userData);
  const response = await fetch("http://localhost:3000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  const data = await response.json();

  if (data.status === "Failed") throw new Error(data.message);

  return data;
};
