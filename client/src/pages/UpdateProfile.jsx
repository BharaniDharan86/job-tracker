import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import Loader from "../ui/Loader";
import { useCookies } from "react-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword, updateUsername } from "../services/apiUser";
import { toast } from "react-hot-toast";
const UpdateProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cookie] = useCookies();
  const token = cookie.access_token;
  const { userData, isUserLoading } = useUser(token);
  const queryClient = useQueryClient();

  const { mutate: updateUsernameMutate } = useMutation({
    mutationFn: () => updateUsername(username, token),
    onSuccess: () => {
      toast.success("Username Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: updatePasswordMutate } = useMutation({
    mutationFn: () =>
      updatePassword(
        {
          password,
          newPassword,
        },
        token
      ),
  });

  useEffect(() => {
    if (userData && !isUserLoading) {
      setUsername(userData.username);
      setEmail(userData.email);
    }
  }, [isUserLoading, userData]);

  function handleUpdateUsername(e) {
    e.preventDefault();
    updateUsernameMutate();
  }
  function handleUpdatePassword(e) {
    e.preventDefault();
    updatePasswordMutate();
  }

  if (isUserLoading) return <Loader />;

  return (
    <div className="mt-[70px] flex flex-col justify-center items-center w-full">
      <form className="sm:w-[40%] w-[90%]" onSubmit={handleUpdateUsername}>
        <h1 className="text-center font-semibold">USER INFORMATION</h1>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text capitalize">Your name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text capitalize">Your Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className="flex justify-end py-3">
          <button className="bg-blue-700 text-white px-3 py-2 font-semibold">
            Update Profile
          </button>
        </div>
      </form>
      <form className=" sm:w-[40%] w-[90%]" onSubmit={handleUpdatePassword}>
        <h1 className="text-center font-semibold ">PASSWORD</h1>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text ">Enter Your Current Password</span>
          </div>
          <input
            type="text"
            placeholder="Current Password"
            className="input input-bordered w-full "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Enter New Password</span>
          </div>
          <input
            type="text"
            placeholder="New Password"
            className="input input-bordered w-full "
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <div className="flex justify-end py-3">
          <button className="bg-blue-700 text-white px-3 py-2 font-semibold">
            Update Passwod
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
