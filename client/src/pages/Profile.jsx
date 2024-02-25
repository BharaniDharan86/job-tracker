import { useQuery } from "@tanstack/react-query";
import getUser from "../services/apiUser";
import { useCookies } from "react-cookie";
import Loader from "../ui/Loader";

export const Profile = () => {
  const [cookie] = useCookies();
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(cookie.access_token),
  });

  if (isLoading) return <Loader />;

  console.log(data);

  console.log(data.userimage);
  return (
    <div>
      <div>
        <h1>{data.username}</h1>
        <img src="user-65da2afb0c9b4e30a8ad6804-1708799018556.jpeg" alt="" />
      </div>
    </div>
  );
};
