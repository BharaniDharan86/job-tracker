import { useQuery } from "@tanstack/react-query";
import getUser from "../services/apiUser";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  const [cookie] = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(cookie.access_token),
  });

  if (isLoading) return <Loader />;
  return (
    <div className="mt-[60px] flex flex-col justify-center items-center">
      <div className="text-center">
        <img src={data.userimage} className="h-30 w-30 rounded-full" />
        <h1 className="font-bold">{data.username}</h1>
        <span className="font-semibold">{data.email}</span>
        <div className="my-4">
          <button className="bg-blue-700 text-white px-3 py-2 font-semibold">
            <NavLink to="updateprofile">Update Profile</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
