import { useQuery } from "@tanstack/react-query";
import getUser from "../services/apiUser";

export default function useUser(token) {
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });
  console.log(userData);

  return { userData, isUserLoading };
}
