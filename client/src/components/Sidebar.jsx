/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { HiBriefcase, HiMiniCalendarDays, HiMiniHome } from "react-icons/hi2";
import { HiMiniBriefcase } from "react-icons/hi2";

import { HiMiniUserCircle } from "react-icons/hi2";
export const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <div
      className={` absolute ${
        isSideBarOpen ? "translate-x-[0]" : "translate-x-[-200%]"
      }  left-0 top-[64px] z-50 h-screen  transition-all duration-300`}
    >
      <ul className="text-lg py-3  h-screen font-semibold w-[230px]  bg-white border-r-2 border-slate-100">
        <li className="mb-3 p-2 hover:bg-slate-50 w-[100%] transition-all duration-400 hover:translate-x-1">
          <NavLink to="/" className="flex items-center gap-4 gap-y-3">
            <HiMiniHome /> Home
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-50 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/app/dashboard"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiMiniCalendarDays />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-50 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink to="/app/jobs" className="flex items-center gap-4 row-gap-4">
            <HiMiniUserCircle />
            All Jobs
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-50 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/app/myjobs"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiMiniBriefcase />
            My Jobs
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-50 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/app/postedjobs"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiMiniBriefcase />
            Posted Jobs
          </NavLink>
        </li>

        <li className="mb-3 p-2 hover:bg-slate-50 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/app/profile"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiMiniUserCircle />
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

/**
 * my jobs
 * dash board
 * profile page
 * home
 * detail page
 * login sign up
 */
