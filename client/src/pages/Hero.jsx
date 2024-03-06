import { NavLink } from "react-router-dom";
import { HiMegaphone } from "react-icons/hi2";
import { HiMiniMegaphone } from "react-icons/hi2";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

import { HiCheckCircle } from "react-icons/hi2";

import HeroImg from "../../public/undraw_People_search_re_5rre.png";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between  h-svh items-center">
        <div className=" pl-20 w-[60%]">
          <h1 className="text-4xl  text-stone-800 font-bold ">
            Hey Job Seekers! Welcome to{" "}
            <b className=" text-blue-700 font-extrabold">CareerSync</b>. Where
            Every Click Brings You Closer to Your Dream Career!
          </h1>

          <div className="my-6">
            <NavLink to="/login">
              <button className="bg-blue-700 text-xl font-semibold text-white px-3 py-3 ">
                Login To Continue
              </button>
            </NavLink>
          </div>
        </div>
        <div className="w-[38%]">
          <img
            src={HeroImg}
            alt=""
            className="flex justify-center items-center"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-stone-800 text-center mb-20">Features</h1>
        <section className="grid grid-cols-[1fr_1fr_1fr] px-20 pb-20">
          <div>
            <div className="flex items-center gap-x-2 mb-1">
              <HiMagnifyingGlassCircle className="text-2xl" />
              <h2 className="font-bold text-2xl">Apply for Jobs</h2>
            </div>
            <p className="font-semibold text-xl w-[80%] leading-6 text-stone-800">
              Browse through thousands of job listings and apply with just a few
              clicks. Find your perfect match today!
            </p>
          </div>
          <div>
            <div className="flex items-center gap-x-2 mb-1">
              <HiMegaphone className="text-2xl" />
              <h2 className="font-bold text-2xl">Hire for Jobs</h2>
            </div>
            <p className="font-semibold text-xl w-[80%] leading-6 text-stone-800">
              Post job openings and connect with top talent from around the
              world. Streamline your hiring process effortlessly!
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <HiCheckCircle className="text-2xl" />
              <h2 className="font-bold text-2xl">Track Your Jobs</h2>
            </div>
            <p className="font-semibold text-xl w-[80%] leading-6 text-stone-800">
              Stay organized and informed about your job applications. Track the
              status of each application and never miss an opportunity!
            </p>
          </div>
        </section>
      </div>
      <div>
        <h1 className="text-4xl text-stone-800 text-center mb-20">
          How It Works
        </h1>
      </div>
    </div>
  );
};

export default Hero;
