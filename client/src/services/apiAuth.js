export const verifyEmail = async function (body) {
  const response = await fetch(
    "http://localhost:3000/api/v1/users/verifyemail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }
  );

  const data = await response.json();

  return data;
};

export const signUp = async function (otp) {
  const response = await fetch("http://localhost:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      otp,
    },
  });

  const data = await response.json();

  return data;
};
