/* eslint-disable react/prop-types */
import { HiMapPin } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { HiBuildingOffice2 } from "react-icons/hi2";

const JobPostItem = ({ job }) => {
  const { _id, title, company, location } = job;
  return (
    <NavLink
      to={`${_id}`}
      className="card w-[90%] my-1 mx-auto  border-2 border-slate-100 bg-base-100 shadow-xl hover:scale-105  transition-all duration-300 hover:bg-slate-200 "
    >
      <div className="card-body p-6 ">
        <div className="flex gap-3 items-center">
          <HiBuildingOffice2 className="text-3xl" />
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{company}</p>
          </div>
        </div>
        <div className="card-actions justify-between ">
          {" "}
          <div className="flex justify-between items-center gap-x-1">
            <HiMapPin />
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
