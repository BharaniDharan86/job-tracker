import { useState } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="">
      <div className=" border-3 border-red-500 relative">
        <Header
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
      </div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
