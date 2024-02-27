/* eslint-disable react/prop-types */
import { HiUserCircle } from "react-icons/hi2";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { Sidebar } from "./Sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export const Header = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["access_token"]);
  function logout() {
    console.log(cookie);
    removeCookie("access_token");
    console.log(cookie);
    navigate("/login");
  }
  return (
    <div className="navbar bg-base-100 border-b-[1px] z-[20] border-slate-100 fixed top-0 left-0 h-[40px] mb-[40px]">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsSideBarOpen((currState) => !currState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CareerSync</a>
      </div>
      <div className="flex text-2xl sm:gap-5 gap-4 sm:pr-11 pr-2">
        <button className="">
          <NavLink
            to="/app/profile
          "
          >
            <HiUserCircle />
          </NavLink>
        </button>
        <button className="" onClick={() => logout()}>
          <HiMiniArrowRightOnRectangle />
        </button>
      </div>
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </div>
  );
};
