/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies?.access_token) return navigate("/login");
  }, [cookies, navigate]);

  if (cookies.access_token) return children;
};
