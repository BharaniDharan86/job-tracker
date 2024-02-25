/* eslint-disable react/prop-types */
import { HiOutlineMapPin } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const JobPostItem = ({ job }) => {
  const { _id, title, company, location } = job;
  return (
    <NavLink
      to={`${_id}`}
      className="card w-[90%] my-1 mx-auto  border-2 border-slate-100 bg-base-100 shadow-xl hover:scale-105  transition-all duration-300 hover:bg-slate-200 "
    >
      <div className="card-body p-6 ">
        <div className="flex gap-3">
          <img
            src="https://imgs.search.brave.com/sbdVzJD4CDdh4bn2Xw_8ijNbyx2-ZX92YghKhVbCRoE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc.svg"
            alt=""
            className="h-11 w-11 rounded-full"
          />
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{company}</p>
          </div>
        </div>
        <div className="card-actions justify-between ">
          {" "}
          <div className="flex justify-between items-center gap-x-1">
            <HiOutlineMapPin />
            <p>{location}</p>
          </div>
          <button className="btn-sm bg-blue-800 text-slate-200 btn-primary">
            View
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default JobPostItem;
