import { HiUserCircle } from "react-icons/hi2";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";

export const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b-[1px] border-slate-800 relative h-[40px]">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex text-2xl sm:gap-5 gap-4 sm:pr-11 pr-2">
        <button className="">
          <HiUserCircle />
        </button>
        <button className="">
          <HiMiniArrowRightOnRectangle />
        </button>
      </div>
    </div>
  );
};
