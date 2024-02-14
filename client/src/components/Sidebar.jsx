import { NavLink } from "react-router-dom";
import { HiMiniCalendarDays, HiMiniHome, HiShoppingBag } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";

export const Sidebar = () => {
  return (
    <div className="w-[200px] bg-slate-900 absolute left-0 top-[64px] border-r-2 h-screen border-slate-800">
      <ul className="text-lg p-3 grid  font-semibold mt-4">
        <li className="mb-4 p-2 hover:bg-slate-800 w-[100%] transition-all duration-400 hover:translate-x-1">
          <NavLink className="flex items-center gap-4 gap-y-3">
            <HiMiniHome /> Home
          </NavLink>
        </li>
        <li className="mb-4 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink className="flex items-center gap-4 row-gap-4">
            <HiShoppingBag />
            My Jobs
          </NavLink>
        </li>
        <li className="mb-4 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink className="flex items-center gap-4 row-gap-4">
            <HiMiniCalendarDays />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-4 p-2 hover:bg-slate-800 w-full transition-all duration-400 hover:translate-x-1">
          <NavLink className="flex items-center gap-4 row-gap-4">
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
