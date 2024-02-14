import { NavLink } from "react-router-dom";
import { HiMiniCalendarDays, HiMiniHome, HiShoppingBag } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
export const Sidebar = () => {
  return (
    <div className="  backdrop-filter fixed z-10 left-0 top-[54px]  h-screen  transition-all duration-300">
      <ul className="text-lg p-3   h-screen  font-semibold mt-4 w-[200px]  bg-slate-900 border-r-2 border-slate-800">
        <li className="mb-3 p-2 hover:bg-slate-800 w-[100%] transition-all duration-400 hover:translate-x-1">
          <NavLink to="/home" className="flex items-center gap-4 gap-y-3">
            <HiMiniHome /> Home
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/app/myjobs"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiShoppingBag />
            My Jobs
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-4 row-gap-4"
          >
            <HiMiniCalendarDays />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-3 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink to="/profile" className="flex items-center gap-4 row-gap-4">
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
